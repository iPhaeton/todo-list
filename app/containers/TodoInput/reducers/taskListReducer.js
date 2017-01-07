import { fromJS } from 'immutable';
import {
  NEWTASK_ACTION,
} from '../constants';
import {
  CHANGETASK_ACTION,
  REMOVETASK_ACTION
} from '../../TodoList/constants';
import {
  LOGOUT
} from "../../Auth/constants";

function taskListReducer(state = initialState, action) {
  switch (action.type) {
    case NEWTASK_ACTION:
      console.log(state);
      return state.setIn(['taskList', state.get("taskList").size], fromJS(action.payload))
    case CHANGETASK_ACTION:
      return state.updateIn(["taskList", action.payload, "done"], value => value ? false : true)
    case REMOVETASK_ACTION:
      return state.deleteIn(["taskList", action.payload]);
    case LOGOUT:
      return state.set("taskList", initialState);
    default:
      return state;
  }
};

export default taskListReducer;