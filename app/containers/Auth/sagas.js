import {  takeEvery } from 'redux-saga';
import {  take, call, put, select } from 'redux-saga/effects';

import fetch from "./fetch";

var router = require('react-router');
 
import {
  AUTH_ACTION,
  AUTH_SUCCESS,
  AUTH_DENIED
} from './constants';

// Individual exports for testing
export function* defaultSaga() {
  yield takeEvery(AUTH_ACTION, fetchUser);
}

function* fetchUser (action) {
  try {
    const user = yield call(fetch, action.payload);
    router.browserHistory.push('/todos');
    yield put({type: AUTH_SUCCESS, payload: user});
  } catch (err) {
    yield put({type: AUTH_DENIED, payload: err});
  }
}

// All sagas to be loaded
export default [
  defaultSaga,
];