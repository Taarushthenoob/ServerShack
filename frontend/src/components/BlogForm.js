import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';

const BlogForm = (props) => {
  console.log(props);
  const { labelValue, title, body, media, onSubmit } = props;

  return (
    <form className="ui form" onSubmit={onSubmit}>
      <div className="required field">
        <label>Label</label>
        <div>
          <Field name="label" component={select}>
            <option></option>
            <option value="Fitness">Fitness</option>
            <option value="Mental Health">Mental Health</option>
            <option value="Diet">Diet</option>
            <option value="Non-Profit Incentive"></option>
          </Field>
        </div>
      </div>
      <div className="required field">
        <label>Title</label>
        <Field
          name="title"
          component={input}
          type="text"
          placeholder="Enter Title of Blog"
        />
      </div>
      <div className="field">
        <label>Blog Content</label>
        <Field
          name="body"
          component={textarea}
          placeholder="Enter Blog content"
        />
      </div>
      <div className="required field">
        <label>Image/Video File</label>
      </div>
    </form>
  );
};

export default reduxForm({ form: 'AddBlogForm' })(BlogForm);
