import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_USERSDATA,
  USERDATA_ERROR,
  GET_USERDATA,
  DELETE_USERDATA,
  ADD_COMMENT,
  REMOVE_COMMENT
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
        // 'Content-Type': ''
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
      type: GET_USERDATA,
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
  // dispatch({ type: CLEAR_USERSDATA });
  try {
    const res = await axios.get(`/api/userdata/${userdataId}`);
    dispatch({
      type: GET_USERDATA,
      payload: res.data
    });
    // console.log(res.data);
  } catch (err) {
    dispatch({
      type: USERDATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Delete Userdata
export const deleteUserdata = id => async dispatch => {
  try {
    await axios.delete(`/api/userdata/${id}`);

    dispatch({
      type: DELETE_USERDATA,
      payload: id
    });

    dispatch(setAlert('Userdata Removed', 'success'));
  } catch (err) {
    dispatch({
      type: USERDATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Add Comment
export const addComment = (userdataId, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(
      `/api/userdata/comment/${userdataId}`,
      formData,
      config
    );

    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    });

    dispatch(setAlert('Comment Added', 'success'));
  } catch (err) {
    dispatch({
      type: USERDATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Delete Comment
export const deleteComment = (userdataId, commentId) => async dispatch => {
  try {
    await axios.delete(`/api/userdata/comment/${userdataId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId
    });

    dispatch(setAlert('Comment Removed', 'success'));
  } catch (err) {
    dispatch({
      type: USERDATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
