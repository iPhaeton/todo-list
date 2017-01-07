import {
  NEWTASK_ACTION,
} from '../constants';
import {
  CHANGETASK_ACTION,
  REMOVETASK_ACTION
} from '../../TodoList/constants';

function tasksLeftReducer(state, action) {
  switch (action.type) {
    case NEWTASK_ACTION:
      return state.set("tasksLeft", state.get("tasksLeft")+1);
    case CHANGETASK_ACTION:
      return state.set("tasksLeft", state.getIn(["taskList", action.payload, "done"]) 
        ? state.get("tasksLeft")+1 : state.get("tasksLeft")-1);
    case REMOVETASK_ACTION:
      return state.set("tasksLeft", state.getIn(["taskList", action.payload, "done"])
        ? state.get("tasksLeft") : state.get("tasksLeft")-1);
    default:
      return state;
  }
};

export default tasksLeftReducer;