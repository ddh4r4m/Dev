import {
  GET_ATROCITYDATAS,
  ATROCITYDATA_ERROR,
  ADD_ATROCITYDATA,
  DELETE_ATROCITYDATA,
  GET_ATROCITYDATA,
  ADD_POLICESTATION
} from '../actions/types';

const initialState = {
  atrocitydatas: [],
  atrocitydata: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ATROCITYDATAS:
      return {
        ...state,
        atrocitydatas: payload,
        loading: false
      };
    case GET_ATROCITYDATA:
      return {
        ...state,
        atrocitydata: payload,
        loading: false
      };
    case DELETE_ATROCITYDATA:
      return {
        ...state,
        atrocitydatas: state.atrocitydatas.filter(
          atrocitydata => atrocitydata._id !== payload
        ),
        loading: false
      };
    case ADD_ATROCITYDATA:
      return {
        ...state,
        atrocitydatas: [payload, ...state.atrocitydatas],
        loading: false
      };
    case ADD_POLICESTATION:
      return {
        ...state,
        atrocitydatas: { ...state.atrocitydatas, policestations: payload },
        loading: false
      };
    case ATROCITYDATA_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
