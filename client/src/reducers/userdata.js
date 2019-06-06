import {
  GET_USERDATA,
  USERDATA_ERROR,
  CLEAR_USERDATA,
  GET_USERSDATA
} from '../actions/types';

const initialState = {
  userdata: null,
  usersdata: [],
  repos: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USERDATA:
      return {
        ...state,
        userdata: payload,
        loading: false
      };
    case GET_USERSDATA:
      return {
        ...state,
        userdata: payload,
        loading: false
      };
    case USERDATA_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_USERDATA:
      return {
        ...state,
        userdata: null,
        repos: [],
        loading: false
      };
    default:
      return state;
  }
}
