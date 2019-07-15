import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_MOFMEETING,
  MOFMEETING_ERROR,
  GET_MOFMEETINGS,
  DELETE_MOFMEETING
} from './types';

//Get Posts
export const getMofmeetings = () => async dispatch => {
  try {
    const res = await axios.get('/api/mofmeeting');
    dispatch({
      type: GET_MOFMEETINGS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MOFMEETING_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Create or Update Profile
export const createMofmeeting = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        // 'Content-Type': ''
      }
    };

    const res = await axios.post('/api/mofmeeting', formData, config);

    dispatch({
      type: GET_MOFMEETING,
      payload: res.data
    });

    dispatch(
      setAlert(
        edit ? 'Minutes of Meeting Updated' : 'Minutes of Meeting Created',
        'success'
      )
    );

    if (!edit) {
      history.push('/dashboard');
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: MOFMEETING_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Edit Userdata
export const editUserdata = (
  userId,
  formData,
  history,
  edit = true
) => async dispatch => {
  try {
    const config = {
      headers: {
        // 'Content-Type': 'application/json'
      },
      onUploadProgress: progressEvent => {
        // var up = (progressEvent.loaded * 100) / progressEvent.total;
        console.log((progressEvent.loaded * 100) / progressEvent.total);
      }
    };

    const res = await axios.put(`/api/userdata/${userId}`, formData, config);
    // dispatch(up, 'success');

    dispatch({
      type: GET_MOFMEETING,
      payload: res.data
    });

    dispatch(
      setAlert(edit ? 'Userdata Updated' : 'Userdata Created', 'success')
    );

    if (edit) {
      history.push(`/userdata/${userId}`);
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: MOFMEETING_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// //Get Profiles
// export const getUsersdata = () => async dispatch => {
//   dispatch({ type: CLEAR_USERDATA });

//   try {
//     const res = await axios.get('/api/userdata');
//     dispatch({
//       type: GET_USERSDATA,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: USERDATA_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

//Get UserdataById
export const getMofmeetingById = mofmeetingId => async dispatch => {
  // dispatch({ type: CLEAR_USERSDATA });
  try {
    const res = await axios.get(`/api/userdata/${mofmeetingId}`);
    dispatch({
      type: GET_MOFMEETING,
      payload: res.data
    });
    // console.log(res.data);
  } catch (err) {
    dispatch({
      type: MOFMEETING_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Delete Userdata
export const deleteUserdata = id => async dispatch => {
  try {
    await axios.delete(`/api/userdata/${id}`);

    dispatch({
      type: DELETE_MOFMEETING,
      payload: id
    });

    dispatch(setAlert('Userdata Removed', 'success'));
  } catch (err) {
    dispatch({
      type: MOFMEETING_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
