import { call, put, takeEvery } from 'redux-saga/effects';
 
import {
  AUTH_ACTION
} from './constants';

// Individual exports for testing
export function* defaultSaga() {
  yield takeEvery(AUTH_ACTION, fetchUser);
}

function* fetchUser (action) {
  try {
    const user = yield call(fetch, action.payload);
    console.log("success");
    yield put({type:AUTH_ACTION, user: user});
  } catch (err) {
    console.log("error");
    yield put({type:AUTH_ACTION, user: err});
  }
}

// All sagas to be loaded
export default [
  defaultSaga,
];

function fetch (user) {
  var request = new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (user.username === "admin" && user.password === "admin") resolve(user);
      else reject(new Error("Wrong credentials"));
    }, 1000);
  });
  
  return request;
};