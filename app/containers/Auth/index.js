/*
 *
 * Auth
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectAuth from './selectors';
import { bindActionCreators } from "redux";

import Authorized from "./Authorized";
import Form from './Form';
import Input from './Input';

import { authAction } from './actions';
import { logoutAction } from "../Auth/actions";
import log from "../../log";

export class Auth extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

    constructor (props) {
        super(props);
    }
    
    renderForm () {
      if (this.props.user) {
        return (
          <Authorized className="col-sm-4 col-md-2">
            <h4>{this.props.user.username}</h4>
            <button className="btn btn-default" onClick={() => this.props.logoutAction()}>Log out</button>
          </Authorized>
        )
      };
      
      return (
        <Form className="col-sm-4 col-md-2" onSubmit={this.props.onSubmitForm}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="form-control"
            />
          </div>
          <input type="submit" value="Send" className="btn btn-default"/>
        </Form>
      )
    }

    render() {
      log(module, this.props.user ? this.props.user.username : this.props.user);
      log(module, this.props.error);

      return (
        <div className="container">

          <header>
            <h1> TODOS </h1>
          </header>

          <div className="row">
            <div className="col-sm-10"></div>

            {this.renderForm()}
          </div>

        </div>
      );
    }
}

Auth.propTypes = {
    onSubmitForm: React.PropTypes.func
};

const mapStateToProps = selectAuth();

function mapDispatchToProps(dispatch) {
  return {
      onSubmitForm: (event) => {
          event.preventDefault();

          var user = {
              username: event.target.elements.name.value,
              password: event.target.elements.password.value
          };
          
          dispatch(authAction(user));
      },
      logoutAction: bindActionCreators(logoutAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
