/*
 *
 * TodoList
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectTodoList from './selectors';

export class TodoList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderList() {
    var arr = this.props.taskList.map((task) => {
      return (
        <div key={task.name}>
          {task.name}
        </div>
      )
    });

    return arr;
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.renderList()}
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
