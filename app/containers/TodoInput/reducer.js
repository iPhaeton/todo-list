/*
 *
 * TodoInput reducer
 *
 */

import { fromJS } from 'immutable';
import {
  NEWTASK_ACTION,
} from './constants';

const initialState = fromJS({
  taskList: []
});

function todoInputReducer(state = initialState, action) {
  switch (action.type) {
    case NEWTASK_ACTION:
      return state.set('taskList', [...state.get("taskList"), action.payload]);
    default:
      return state;
  }
}

export default todoInputReducer;
