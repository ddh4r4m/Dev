import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import userdata from './userdata';
import deouserdata from './deouserdata';
import mofmeeting from './mofmeeting';

export default combineReducers({
  alert,
  auth,
  profile,
  post,
  userdata,
  deouserdata,
  mofmeeting
});
