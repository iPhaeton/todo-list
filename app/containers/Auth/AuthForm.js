import React from "react";
import { Field, reduxForm } from "redux-form/immutable";
import styled from "styled-components";

const Input = styled.input`
    background-color: #fff;
`;

const Form = styled.form`
    background-color: #0050a9;
    padding: 15px;
    border-radius: 10px;
`;

const AuthForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <Field
          name="name"
          type="text"
          placeholder="Enter your name"
          className="form-control"
          component="Input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <Field
          name="password"
          type="password"
          placeholder="Enter your password"
          className="form-control"
          component="Input"
        />
      </div>
      <input type="submit" value="Send" className="btn btn-default"/>
    </Form>
  )
};

export default reduxForm ({
  form: "authForm"
})(AuthForm);