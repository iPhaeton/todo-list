/*
 *
 * TodoInput
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectTodoInput from './selectors';

import { defaultAction } from './actions';

export class TodoInput extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmitForm}>
          <div className="input-group">
            <input id="todoInput" type="text" className="form-control" placeholder="Enter a task"/>
            <span className="input-group-btn">
              <input type="submit" className="btn btn-default" value="Add task"/>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

TodoInput.propTypes = {
    onSubmitForm: React.PropTypes.func
};

const mapStateToProps = selectTodoInput();

function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (event) => {
        event.preventDefault();

        var task = event.target.elements.todoInput.value;
        if (task) {
          dispatch(defaultAction(task));
        };
      }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
