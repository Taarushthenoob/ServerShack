import React, {Component} from 'react';
import { Field, reduxForm, formValues } from 'redux-form';


class BlogForm extends Component {
   
   
   
    const onSubmit = (formValues) => {
        
    }
    
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