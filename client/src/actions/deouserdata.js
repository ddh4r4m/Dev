import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_DEOUSERSDATA,
  DEOUSERDATA_ERROR,
  GET_DEOUSERDATA,
  DELETE_DEOUSERDATA,
  ADD_COMMENT,
  REMOVE_COMMENT
} from './types';

//Get Posts
export const getDeousersdata = () => async dispatch => {
  try {
    const res = await axios.get('/api/deouserdata');
    dispatch({
      type: GET_DEOUSERSDATA,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: DEOUSERDATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Create or Update Profile
export const createDeouserdata = (
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

    const res = await axios.post('/api/deouserdata', formData, config);

    dispatch({
      type: GET_DEOUSERDATA,
      payload: res.data
    });

    dispatch(
      setAlert(edit ? 'Deouserdata Updated' : 'Deouserdata Created', 'success')
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
      type: DEOUSERDATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Edit Deouserdata
export const editDeouserdata = (
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

    const res = await axios.put(`/api/deouserdata/${userId}`, formData, config);
    // dispatch(up, 'success');

    dispatch({
      type: GET_DEOUSERDATA,
      payload: res.data
    });

    dispatch(
      setAlert(edit ? 'Deouserdata Updated' : 'Deouserdata Created', 'success')
    );

    if (edit) {
      history.push(`/deouserdata/${userId}`);
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: DEOUSERDATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// //Get Profiles
// export const getDeousersdata = () => async dispatch => {
//   dispatch({ type: CLEAR_USERDATA });

//   try {
//     const res = await axios.get('/api/deouserdata');
//     dispatch({
//       type: GET_DEOUSERSDATA,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: DEOUSERDATA_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

//Get DeouserdataById
export const getDeouserdataById = deouserdataId => async dispatch => {
  // dispatch({ type: CLEAR_USERSDATA });
  try {
    const res = await axios.get(`/api/deouserdata/${deouserdataId}`);
    dispatch({
      type: GET_DEOUSERDATA,
      payload: res.data
    });
    // console.log(res.data);
  } catch (err) {
    dispatch({
      type: DEOUSERDATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Delete Deouserdata
export const deleteDeouserdata = id => async dispatch => {
  try {
    await axios.delete(`/api/deouserdata/${id}`);

    dispatch({
      type: DELETE_DEOUSERDATA,
      payload: id
    });

    dispatch(setAlert('Deouserdata Removed', 'success'));
  } catch (err) {
    dispatch({
      type: DEOUSERDATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Add Comment
export const addComment = (deouserdataId, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(
      `/api/deouserdata/comment/${deouserdataId}`,
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
      type: DEOUSERDATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Delete Comment
export const deleteComment = (deouserdataId, commentId) => async dispatch => {
  try {
    await axios.delete(
      `/api/deouserdata/comment/${deouserdataId}/${commentId}`
    );

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId
    });

    dispatch(setAlert('Comment Removed', 'success'));
  } catch (err) {
    dispatch({
      type: DEOUSERDATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
