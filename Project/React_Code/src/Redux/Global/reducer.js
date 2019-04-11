import {
  GET_ADDRESS,
  GET_ADDRESS_SUCCESS,
  GET_ADDRESS_FAILED,
  GET_SECOND_ADDRESS,
  GET_SECOND_ADDRESS_SUCCESS,
  GET_SECOND_ADDRESS_FAILED,
  SUBMIT_TRANSFER,
  SUBMIT_TRANSFER_SUCCESS,
  SUBMIT_TRANSFER_FAILED
} from "./actionType";

const initialState = {
  dataone: null,
  datatwo: null,
  response: null
};

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ADDRESS:
      return {
        ...state,
        dataone: null
      };
    case GET_ADDRESS_SUCCESS:
      return {
        ...state,
        dataone: action.payload
      };
    case GET_ADDRESS_FAILED:
      return {
        ...state,
        dataone: action.payload
      };
    case GET_SECOND_ADDRESS:
      return {
        ...state,
        datatwo: null
      };
    case GET_SECOND_ADDRESS_SUCCESS:
      return {
        ...state,
        datatwo: action.payload
      };
    case GET_SECOND_ADDRESS_FAILED:
      return {
        ...state,
        datatwo: action.payload
      };
    case SUBMIT_TRANSFER:
      return {
        ...state,
        response: null
      };
    case SUBMIT_TRANSFER_SUCCESS:
      return {
        ...state,
        response: action.payload
      };
    case SUBMIT_TRANSFER_FAILED:
      return {
        ...state,
        response: action.payload
      };
    default:
      return state;
  }
}

export default globalReducer;
