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
import AuthForm from './AuthForm';
import ErrMsg from "./ErrMsg";

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
        <AuthForm onSubmit={this.props.onSubmitForm} />
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

            <div className="col-sm-4 col-md-2">
              {this.renderForm()}
              <ErrMsg>{this.props.error}</ErrMsg>
            </div>
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
      onSubmitForm: (values) => {
          var user = {
              username: values.get("name"),
              password: values.get("password")
          };
          
          dispatch(authAction(user));
      },
      logoutAction: bindActionCreators(logoutAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
