/*
 *
 * TodoList reducer
 *
 */

import { fromJS } from 'immutable';

const initialState = fromJS({});

function todoListReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default todoListReducer;
