import { createSelector } from 'reselect';

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
  (substate) => substate.toJS()
);

export default selectTodoInput;
export {
  selectTodoInputDomain,
};
