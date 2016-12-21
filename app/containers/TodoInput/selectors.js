import { createSelector } from 'reselect';

import { selectAuthDomain } from "../Auth/selectors";

/**
 * Direct selector to the todoInput state domain
 */
const selectTodoInputDomain = () => (state) => state.get('todoInput');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TodoInput
 */

const selectTodoInput = () => createSelector(
  selectTodoInputDomain(),
  selectAuthDomain(),
  (substateTodoInput, substateAuth) =>
    substateAuth ? {...substateTodoInput.toJS(), ...substateAuth.toJS()} : substateTodoInput.toJS()
);

export default selectTodoInput;
export {
  selectTodoInputDomain,
};
