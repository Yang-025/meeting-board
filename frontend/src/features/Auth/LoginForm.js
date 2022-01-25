import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

const required = value => (value ? undefined : 'Required');
const maxLength = max => value =>
  (value && value.length > max ? `Must be ${max} characters or less` : undefined);
const maxLength30 = maxLength(30);
const minValue = min => value =>
  (value && value < min ? `Must be at least ${min}` : undefined);
const minValue4 = minValue(4);


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label htmlFor={label}>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

renderField.propTypes = {
  input: PropTypes.shape().isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape().isRequired
};

const LoginForm = (props) => {
  const { error, handleSubmit, pristine, reset, submitting } = props;
  return (
    <form>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
        validate={[required, maxLength30]}
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
        validate={[required, minValue4]}
      />
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={submitting} onClick={handleSubmit(props.onSubmit)}>Log In</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'loginForm'  // a unique identifier for this form
})(LoginForm);


LoginForm.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};


LoginForm.defaultProps = {
  error: null,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

