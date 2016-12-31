import { fromJS } from 'immutable';

import user from "./reducers/userReducer";
import error from "./reducers/errorReducer";

const initialState = fromJS({ user: null, error: "" });

export default function (state = initialState, action) {
  state = user(state, action);
  state = error(state, action);
  return state;
}