import React, {Component} from 'react';
import { Field, reduxForm, formValues } from 'redux-form';


class BlogForm extends Component {
   
    renderError({ error, touched }) {
        if (touched && error) {
          return (
            <div className="ui error message">
              <div className="header">{error}</div>
            </div>
          );
        }
      }
   
    renderInput = ({ input, label, meta }, type, classN) => {
        const className = `field ${meta.error && meta.touched ? 'error' : `${classN}`}`;
    
        return (
          <div className={className}>
            <label>{label}</label>
            <input {...input} type={type} autoComplete="off" />
            {this.renderError(meta)}
          </div>
        );
      };
    
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }
    
    render() {
        return (
            <form
              className="ui form error"
              onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
              <Field
                name="label"
                component={this.renderInput(type= 'checkbox', classN= 'ui toggle checkbox' )}
                label={this.props.label}
              />
              <Field name="title" component={this.renderInput} label={this.props.title} />
              
              <button className="ui button primary">Submit</button>
            </form>
          );
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.website) {
      errors.title = 'You must enter the website link';
    }
  
    if (!formValues.upi) {
      errors.description = 'You must enter the UPI ID';
    }
  
    return errors;
  };
  

export default reduxForm({
    form: 'newJamPost';
    validate;
})(BlogForm);