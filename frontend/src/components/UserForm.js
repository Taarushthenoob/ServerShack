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
    console.log(input);
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
          name="website"
          component={this.renderInput}
          label={this.props.label}
        />
        <Field name="upi" component={this.renderInput} label={this.props.upi} />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.website) {
    errors.website = 'You must enter the website link';
  }

  if (!formValues.upi) {
    errors.upi = 'You must enter the UPI ID';
  }

  return errors;
};

export default reduxForm({
  form: 'nonProfitOrgForm',
  validate,
})(UserForm);
