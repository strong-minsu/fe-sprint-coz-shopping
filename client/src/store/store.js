import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { productReducer } from "../reducers/productReducer";
import thunk from "redux-thunk";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;

export const store = createStore(
  productReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
