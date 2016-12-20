/*
 *
 * Auth
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectAuth from './selectors';

import Form from './Form';
import Input from './Input';

import { defaultAction } from './actions';

export class Auth extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

    constructor (props) {
        super(props);
    }

    render() {
        console.log(this.props.user);

        return (
            <div className="container">

                <header>
                    <h1> TODOS </h1>
                </header>

                <div className="row">
                    <div className="col-sm-10"></div>

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
                </div>

            </div>
        );
    }

    /*onSubmitForm (event) {
        event.preventDefault();

        console.log("Form submitted");
    }*/
}

Auth.propTypes = {
    onSubmitForm: React.PropTypes.func
};

const mapStateToProps = selectAuth();

function mapDispatchToProps(dispatch) {
  return {
      onSubmitForm: (event) => {
          event.preventDefault();
          
          //setTimeout(() => {
              var user = {
                username: event.target.elements.name.value,
                password: event.target.elements.password.value
              };
              
              if (user.username === "admin" && user.password === "admin") {
                  dispatch(defaultAction(null, user));
              } else {
                  dispatch(defaultAction(new Error("Wrong username or password")));
              };
          //}, 0);
      }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
