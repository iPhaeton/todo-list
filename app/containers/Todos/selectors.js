import { createSelector } from 'reselect';

import { selectAuthDomain } from "../Auth/selectors";

const selectTodos = () => createSelector(
  selectAuthDomain(),
  (substateAuth) =>
    substateAuth ? {...substateAuth.toJS()} : {}
);

export default selectTodos;