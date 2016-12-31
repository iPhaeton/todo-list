import { combineReducers } from "redux";

import user from "./reducers/userReducer";
import error from "./reducers/errorReducer";

export default combineReducers ({
  user,
  error
});