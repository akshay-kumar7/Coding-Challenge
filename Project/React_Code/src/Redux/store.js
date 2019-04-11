import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import reducers from "./rootReducer";
import { logger } from "redux-logger";
import API from "../Utils/endpoints";

const axiosInstance = axios.create({
  baseURL: API.baseUrl
});

const enhancers = compose(
  applyMiddleware(thunk.withExtraArgument(axiosInstance), logger)
);
const store = createStore(reducers, enhancers);

export default store;
