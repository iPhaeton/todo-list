/*
 *
 * TodoInput reducer
 *
 */

import { fromJS } from 'immutable';
import {
  NEWTASK_ACTION,
} from './constants';
import {
  CHANGETASK_ACTION,
} from '../TodoList/constants';

const initialState = fromJS({
  taskList: []
});

function todoInputReducer(state = initialState, action) {
  switch (action.type) {
    case NEWTASK_ACTION:
      return state.set('taskList', [...state.get("taskList"), action.payload]);
    case CHANGETASK_ACTION:
      var taskList = state.get("taskList"),
          index = action.payload;
      return state.set("taskList",
        [...taskList.slice(0, index),
          {name: taskList[index].name, done: taskList[index].done ? false : true},
          ...taskList.slice(index + 1)]);
    default:
      return state;
  }
}

export default todoInputReducer;
