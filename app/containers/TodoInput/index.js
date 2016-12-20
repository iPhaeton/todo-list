/*
 *
 * TodoInput
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectTodoInput from './selectors';

export class TodoInput extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <form>
          <div className="input-group">
            <input id="todo-input" type="text" className="form-control" placeholder="Enter a task"/>
            <span className="input-group-btn">
              <input type="submit" className="btn btn-default" value="Add task"/>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = selectTodoInput();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
