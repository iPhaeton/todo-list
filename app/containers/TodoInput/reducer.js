/*
 *
 * TodoInput reducer
 *
 */

import { fromJS } from 'immutable';

import taskListReducer from "./reducers/taskListReducer";
import tasksLeftReducer from "./reducers/tasksLeftReducer";

const initialState = fromJS({
  taskList: [],
  tasksLeft: 0
});

function todoInputReducer(state = initialState, action) {
  return state.withMutations(state => taskListReducer(tasksLeftReducer(state, action), action));
};

export default todoInputReducer;
