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

import { changeAction, removeAction } from "./actions";

export class TodoList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor (props) {
    super(props);
    this.state = {
      flag: null
    };
  }

  renderList() {
    const self = this;

    return this.props.taskList.map((task, i) => {
      if (self.state.flag === null || self.state.flag === task.done) {
        return (
          <TodoItem key={i} item={task} index={i} onDone={this.props.onDone.bind(this)} onRemove={this.props.onRemove.bind(this)}/>
        )
      } else return null;
    });
  }

  renderControls () {
    return (
      <ControlPanel className="panel panel-default">
        <button onClick={() => this.setFlag(null)}>All</button>
        <button onClick={() => this.setFlag(false)}>Active</button>
        <button onClick={() => this.setFlag(true)}>Completed</button>
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

  setFlag (flag) {
    this.setState({flag});
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
