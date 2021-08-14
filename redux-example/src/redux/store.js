import { incrementActionCreator } from "./actions";
import { incrementReducer } from "./reducers";
import { createStore } from "redux";
let store = createStore(incrementReducer);

export default store;
