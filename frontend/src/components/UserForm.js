import React from 'react';
import { Field, reduxForm } from 'redux-form';

class UserForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="label1"
          component={this.renderInput}
          label={this.props.label1}
        />
        <Field name="label2" component={this.renderInput} label={this.props.label2} />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.label1) {
    errors.label1 = 'You must enter the website link';
  }

  if (!formValues.label2) {
    errors.label2 = 'You must enter the UPI ID';
  }

  return errors;
};

export default reduxForm({
  form: 'UserForm',
  validate,
})(UserForm);
