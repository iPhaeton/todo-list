import { createSelector } from 'reselect';

import { selectTodoInputDomain } from "../TodoInput/selectors";

/**
 * Direct selector to the todoList state domain
 */
const selectTodoListDomain = () => (state) => state.get('todoList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TodoList
 */

const selectTodoList = () => createSelector(
  selectTodoListDomain(),
  selectTodoInputDomain(),
  (substateTodoList, substateTodoInput) =>
    substateTodoInput ? {...substateTodoList.toJS(), ...substateTodoInput.toJS()} : substateTodoList.toJS()
);

export default selectTodoList;
export {
  selectTodoListDomain,
};
