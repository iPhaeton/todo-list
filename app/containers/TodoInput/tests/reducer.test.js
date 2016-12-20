import expect from 'expect';
import todoInputReducer from '../reducer';
import { fromJS } from 'immutable';

describe('todoInputReducer', () => {
  it('returns the initial state', () => {
    expect(todoInputReducer(undefined, {})).toEqual(fromJS({}));
  });
});
