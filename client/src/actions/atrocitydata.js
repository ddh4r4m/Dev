import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_ATROCITYDATAS,
  GET_ATROCITYDATA,
  ATROCITYDATA_ERROR,
  ADD_ATROCITYDATA,
  DELETE_ATROCITYDATA,
  ADD_POLICESTATION
} from './types';

//Get Posts
export const getAtrocityDatas = () => async dispatch => {
  try {
    const res = await axios.get('/api/atrocitydata');
    dispatch({
      type: GET_ATROCITYDATAS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ATROCITYDATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//add posts
export const addAtrocityData = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/atrocitydata', formData, config);
    dispatch({
      type: ADD_ATROCITYDATA,
      payload: res.data
    });

    dispatch(setAlert('AtrocityData Created', 'success'));
  } catch (err) {
    dispatch({
      type: ATROCITYDATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Delete AtrocityDatas
export const deletePost = id => async dispatch => {
  try {
    await axios.delete(`/api/atrocitydata/${id}`);

    dispatch({
      type: DELETE_ATROCITYDATA,
      payload: id
    });

    dispatch(setAlert('Post Removed', 'success'));
  } catch (err) {
    dispatch({
      type: ATROCITYDATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Create or Update Profile
export const createAtrocitydata = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      // headers: {
      //   'Content-Type': 'application/json'
      // }
    };

    const res = await axios.post('/api/atrocitydata', formData, config);

    dispatch({
      type: GET_ATROCITYDATA,
      payload: res.data
    });

    dispatch(
      setAlert(
        edit ? 'AtrocityData Updated' : 'AtrocityData Created',
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
      type: ATROCITYDATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Add PoliceStation userwise
export const addPoliceStation = (_Id, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    console.log(_Id);
    console.log(formData);
    const res = await axios.post(
      `/api/atrocitydata/policestation/${_Id}`,
      formData,
      config
    );

    dispatch({
      type: ADD_POLICESTATION,
      payload: res.data
    });

    dispatch(setAlert('Police Station Added', 'success'));
  } catch (err) {
    dispatch({
      type: ATROCITYDATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
