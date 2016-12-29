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

import { logoutAction } from "../Auth/actions";

class Todos extends React.PureComponent {
  render () {
    return (
      <div className="container">
        <TodoInput/>
        <TodoList/>
        <button className="btn btn-primary" onClick={() => this.props.logoutAction()}>Log out</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({logoutAction}, dispatch);
}

export default connect(null, mapDispatchToProps)(Todos);