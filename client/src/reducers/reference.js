import {
  GET_REFERENCE,
  REFERENCE_ERROR,
  CLEAR_REFERENCE,
  CLEAR_REFERENCES,
  GET_REFERENCES,
  DELETE_REFERENCE
} from '../actions/types';

const initialState = {
  reference: null,
  references: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_REFERENCE:
      return {
        ...state,
        reference: payload,
        loading: false
      };
    case GET_REFERENCES:
      return {
        ...state,
        references: payload,
        loading: false
      };
    case DELETE_REFERENCE:
      return {
        ...state,
        reference: state.reference.filter(
          reference => reference._id !== payload
        ),
        loading: false
      };
    case REFERENCE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_REFERENCE:
      return {
        ...state,
        reference: null,
        repos: [],
        loading: false
      };
    case CLEAR_REFERENCES:
      return {
        ...state,
        references: [],
        repos: [],
        loading: false
      };
    default:
      return state;
  }
}
