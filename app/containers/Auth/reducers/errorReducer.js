/*
 *
 * Auth reducer
 *
 */

import {
  AUTH_SUCCESS,
  AUTH_DENIED
} from '../constants';

function errorReducer(state, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return "";
    case AUTH_DENIED:
      return action.payload;
    default:
      return state.get("error");
  }
};

export default errorReducer;