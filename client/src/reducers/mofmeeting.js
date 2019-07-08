import {
  GET_MOFMEETING,
  MOFMEETING_ERROR,
  CLEAR_MOFMEETING,
  CLEAR_MOFMEETINGS,
  GET_MOFMEETINGS,
  DELETE_MOFMEETING
} from '../actions/types';

const initialState = {
  mofmeeting: null,
  mofmeetings: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MOFMEETING:
      return {
        ...state,
        mofmeeting: payload,
        loading: false
      };
    case GET_MOFMEETINGS:
      return {
        ...state,
        mofmeetings: payload,
        loading: false
      };
    case DELETE_MOFMEETING:
      return {
        ...state,
        mofmeeting: state.mofmeeting.filter(
          mofmeeting => mofmeeting._id !== payload
        ),
        loading: false
      };
    case MOFMEETING_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_MOFMEETING:
      return {
        ...state,
        mofmeeting: null,
        repos: [],
        loading: false
      };
    case CLEAR_MOFMEETINGS:
      return {
        ...state,
        mofmeetings: [],
        repos: [],
        loading: false
      };
    default:
      return state;
  }
}
