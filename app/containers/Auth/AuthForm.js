import React from "react";
import { Field, reduxForm } from "redux-form/immutable";
import styled from "styled-components";

const Form = styled.form`
    background-color: #0050a9;
    padding: 15px;
    border-radius: 10px;
`;

const renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} type={type} placeholder={placeholder} className="form-control"/>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
}

const AuthForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <Field
          name="name"
          type="text"
          placeholder="Enter your name"
          component={renderField}
          label="Name"
        />
      </div>
      <div className="form-group">
        <Field
          name="password"
          type="password"
          placeholder="Enter your password"
          component={renderField}
          label="Password"
        />
      </div>
      <input type="submit" value="Send" className="btn btn-default"/>
    </Form>
  )
};

/*const validate = (values) => {
  let errors = {};

  if (!values.name) errors.name = "Required";

  return errors;
};*/

export default reduxForm ({
  form: "authForm",
  //validate
})(AuthForm);