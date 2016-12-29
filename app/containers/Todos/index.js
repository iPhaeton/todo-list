/**
*
* Todos
*
*/

import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TodoInput from "../../containers/TodoInput";
import TodoList from "../../containers/TodoList";

import selectTodos from './selectors';
import { logoutAction } from "../Auth/actions";

class Todos extends React.PureComponent {
  render () {
    if (!this.props.user) return (
      <div>
        <h3>Not authorized!</h3>
      </div>
    );
    
    return (
      <div className="container">
        <TodoInput/>
        <TodoList/>
        <button className="btn btn-primary" onClick={() => this.props.logoutAction()}>Log out</button>
      </div>
    );
  }
};

const mapStateToProps = selectTodos();

function mapDispatchToProps(dispatch) {
  return bindActionCreators({logoutAction}, dispatch);
};

export default connect(selectTodos, mapDispatchToProps)(Todos);