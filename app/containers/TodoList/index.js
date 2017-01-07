/*
 *
 * TodoList
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectTodoList from './selectors';

import TodoItem from "../../components/TodoItem";
import ControlPanel from "./ControlPanel";

import { changeAction, removeAction, changeFlagAction } from "./actions";

export class TodoList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderList() {
    const self = this;

    return this.props.taskList.map((task, i) => {
      if (self.props.flag === null || self.props.flag === task.done) {
        return (
          <TodoItem key={i} item={task} index={i} onDone={this.props.onDone.bind(this)} onRemove={this.props.onRemove.bind(this)}/>
        )
      } else return null;
    });
  }

  renderControls () {
    return (
      <ControlPanel className="panel panel-default">
        <button onClick={() => this.props.setFlag(null)}>All</button>
        <button onClick={() => this.props.setFlag(false)}>Active</button>
        <button onClick={() => this.props.setFlag(true)}>Completed</button>
      </ControlPanel>
    )
  }

  render() {
    return (
      <div>
        <div>
          {this.renderList()}
        </div>
        {this.props.taskList.length ? this.renderControls() : null}
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
    },

    setFlag (flag) {
      dispatch(changeFlagAction(flag));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
