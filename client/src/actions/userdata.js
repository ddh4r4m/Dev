import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_USERSDATA,
  USERDATA_ERROR,
  GET_USERDATA,
  CLEAR_USERDATA
} from './types';

//Get Posts
export const getUsersdata = () => async dispatch => {
  try {
    const res = await axios.get('/api/userdata');
    dispatch({
      type: GET_USERSDATA,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: USERDATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Create or Update Profile
export const createUserdata = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.post('/api/userdata', formData, config);

    dispatch({
      type: GET_USERDATA,
      payload: res.data
    });

    dispatch(
      setAlert(edit ? 'Userdata Updated' : 'Userdata Created', 'success')
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
      type: USERDATA_ERROR,
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
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.put(`/api/userdata/${userId}`, formData, config);

    dispatch({
      type: GET_USERDATA,
      payload: res.data
    });

    dispatch(
      setAlert(edit ? 'Userdata Updated' : 'Userdata Created', 'success')
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
      type: USERDATA_ERROR,
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
export const getUserdataById = userdataId => async dispatch => {
  try {
    const res = await axios.get(`/api/userdata/${userdataId}`);
    dispatch({
      type: GET_USERDATA,
      payload: res.data
    });
    console.log(res.data);
  } catch (err) {
    dispatch({
      type: USERDATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
