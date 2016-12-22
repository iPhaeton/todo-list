/*
 *
 * TodoList
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectTodoList from './selectors';

export class TodoList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        Todo list here!!!
      </div>
    );
  }
}

const mapStateToProps = selectTodoList();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
