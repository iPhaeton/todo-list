/*
 *
 * TodoList reducer
 *
 */

import { fromJS } from 'immutable';

import { CHANGEFLAG_ACTION } from "./constants"

const initialState = fromJS({flag: null});

function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGEFLAG_ACTION:
      return state.set("flag", action.payload);
    default:
      return state;
  }
}

export default todoListReducer;
