import { fromJS } from 'immutable';

import userReducer from "./reducers/userReducer";
import errorReducer from "./reducers/errorReducer";

const initialState = fromJS({ user: null, error: "" });

export default function (state = initialState, action) {
  const user = userReducer(state, action);
  const error = errorReducer(state, action);
  return state.withMutations((state) => {
    state.set("user", fromJS(user)).set("error", fromJS(error));
  });
};