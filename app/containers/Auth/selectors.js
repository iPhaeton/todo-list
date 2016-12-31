import { createSelector } from 'reselect';

import log from "../../log";

/**
 * Direct selector to the auth state domain
 */
const selectAuthDomain = () => (state) => state.get('auth');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Auth
 */

const selectAuth = () => createSelector(
  selectAuthDomain(),
  (substate) => {
    //log(module, substate);
    return substate.toJS()
  }
);

export default selectAuth;
export {
  selectAuthDomain,
};
