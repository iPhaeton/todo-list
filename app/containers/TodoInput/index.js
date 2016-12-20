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
        TodoInput here!!!
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
