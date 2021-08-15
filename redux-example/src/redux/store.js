import { authReducer, counterReducer } from "./reducers";
import { combineReducers, createStore } from "redux";
let rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});
let store = createStore(rootReducer);

export default store;
