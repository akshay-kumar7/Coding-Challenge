import API from "../../Utils/endpoints";
// import Cookies from "js-cookie";

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

function gettingAddress() {
  return {
    type: GET_ADDRESS
  };
}

function gettingAddressSuccess(payload) {
  return {
    type: GET_ADDRESS_SUCCESS,
    payload
  };
}

function gettingAddressFailed(payload) {
  return {
    type: GET_ADDRESS_FAILED,
    payload
  };
}

function gettingAddressSecond() {
  return {
    type: GET_SECOND_ADDRESS
  };
}

function gettingAddressSecondSuccess(payload) {
  return {
    type: GET_SECOND_ADDRESS_SUCCESS,
    payload
  };
}

function gettingAddressSecondFailed(payload) {
  return {
    type: GET_SECOND_ADDRESS_FAILED,
    payload
  };
}

function submittingTransfer() {
  return {
    type: SUBMIT_TRANSFER
  };
}

function submittingTransferSuccess(payload) {
  return {
    type: SUBMIT_TRANSFER_SUCCESS,
    payload
  };
}

function submittingTransferFailed(payload) {
  return {
    type: SUBMIT_TRANSFER_FAILED,
    payload
  };
}

export const getAddress = () => async (dispatch, getState, api) => {
  dispatch(gettingAddress());
  const response = await api.get(
    "https://api.blockcypher.com/v1/btc/test3/addrs/n4VQ5YdHf7hLQ2gWQYYrcxoE5B7nWuDFNF/balance"
  );
  if (response.status === 200) {
    dispatch(gettingAddressSuccess(response.data));
  } else {
    dispatch(gettingAddressFailed(response.data));
  }
};

export const getAddressSecond = () => async (dispatch, getState, api) => {
  dispatch(gettingAddressSecond());
  const response = await api.get(
    "https://api.blockcypher.com/v1/btc/test3/addrs/mtXWDB6k5yC5v7TcwKZHB89SUp85yCKshy/balance"
  );
  console.log(response);  
  if (response.status === 200) {
    dispatch(gettingAddressSecondSuccess(response.data));
  } else {
    dispatch(gettingAddressSecondFailed(response.data));
  }
};

export const submitTransfer = payload => async (dispatch, getState, api) => {
  dispatch(submittingTransfer());
  const response = await api.post("http://localhost:4000/contact/done", {newtx:payload});
  if (response.status === 200) {
    dispatch(submittingTransferSuccess(response.data));
  } else {
    dispatch(submittingTransferFailed(response.data));
  }
};
