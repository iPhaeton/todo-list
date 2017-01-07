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
  REMOVETASK_ACTION
} from '../TodoList/constants';
import {
  LOGOUT
} from "../Auth/constants";

const initialState = fromJS({
  taskList: [],
  tasksLeft: 0
});

function todoInputReducer(state = initialState, action) {
  switch (action.type) {
    case NEWTASK_ACTION:
      console.log(state);
      return state.withMutations((state) => {
        state.setIn(['taskList', state.get("taskList").size], fromJS(action.payload))
          .set("tasksLeft", state.get("tasksLeft")+1);
      });
    case CHANGETASK_ACTION:
      return state.withMutations((state) => {
        state.updateIn(["taskList", action.payload, "done"], value => value ? false : true)
          .set("tasksLeft", state.getIn(["taskList", action.payload, "done"])
            ? state.get("tasksLeft")-1 : state.get("tasksLeft")+1);
      });
    case REMOVETASK_ACTION:
      return state.withMutations((state) => {
        state.set("tasksLeft", state.getIn(["taskList", action.payload, "done"])
          ? state.get("tasksLeft") : state.get("tasksLeft")-1)
          .deleteIn(["taskList", action.payload]);
      });
    case LOGOUT:
      return state.set("taskList", initialState);
    default:
      return state;
  }
}

export default todoInputReducer;
