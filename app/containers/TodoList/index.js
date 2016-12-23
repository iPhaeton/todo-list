/*
 *
 * TodoList
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectTodoList from './selectors';

import TodoItem from "../../components/TodoItem";

import { changeAction, removeAction } from "./actions";

export class TodoList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderList() {
    var arr = this.props.taskList.map((task, i) => {
      return (
        <TodoItem key={i} item={task} index={i} onDone={this.props.onDone.bind(this)} onRemove={this.props.onRemove.bind(this)}/>
      )
    });

    return arr;
  }

  render() {
    //console.log(this.props);
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

TodoItem.propTypes = {
  onDone: React.PropTypes.func,
  onRemove: React.PropTypes.func
};

const mapStateToProps = selectTodoList();

function mapDispatchToProps(dispatch) {
  return {
    onDone: (index) => {
      dispatch(changeAction(index));
    },
    
    onRemove: (index) => {
      dispatch(removeAction(index));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
