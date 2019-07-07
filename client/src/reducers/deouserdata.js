import {
  GET_DEOUSERDATA,
  DEOUSERDATA_ERROR,
  CLEAR_DEOUSERDATA,
  CLEAR_DEOUSERSDATA,
  GET_DEOUSERSDATA,
  DELETE_DEOUSERDATA,
  ADD_COMMENT,
  REMOVE_COMMENT
} from '../actions/types';

const initialState = {
  deouserdata: null,
  deousersdata: [],
  repos: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DEOUSERDATA:
      return {
        ...state,
        deouserdata: payload,
        loading: false
      };
    case GET_DEOUSERSDATA:
      return {
        ...state,
        deousersdata: payload,
        loading: false
      };
    case DELETE_DEOUSERDATA:
      return {
        ...state,
        deouserdata: state.deouserdata.filter(
          deouserdata => deouserdata._id !== payload
        ),
        loading: false
      };
    case DEOUSERDATA_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_DEOUSERDATA:
      return {
        ...state,
        deouserdata: null,
        repos: [],
        loading: false
      };
    case CLEAR_DEOUSERSDATA:
      return {
        ...state,
        deousersdata: [],
        repos: [],
        loading: false
      };
    case ADD_COMMENT:
      return {
        ...state,
        deouserdata: { ...state.deouserdata, comments: payload },
        loading: false
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        deouserdata: {
          ...state.deouserdata,
          comments: state.deouserdata.comments.filter(
            comment => comment._id !== payload
          )
        },
        loading: false
      };
    default:
      return state;
  }
}
