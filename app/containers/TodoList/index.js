/*
 *
 * TodoList
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectTodoList from './selectors';

import TodoItem from "../../components/TodoItem";

export class TodoList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderList() {
    var arr = this.props.taskList.map((task, i) => {
      return (
        <TodoItem key={i} item={task} index={i} onDone={this.onDone.bind(this)}/>
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

  onDone () {
    alert("Done");
  }
}

const mapStateToProps = selectTodoList();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
