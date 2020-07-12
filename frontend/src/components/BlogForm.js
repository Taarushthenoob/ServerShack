import React from 'react';

const BlogForm = (props) => {
  return (
    <form className="ui form" onSubmit={props.onSubmit}>
      <div className="required field">
        <label>Label</label>
        <div>
          <select className="ui fluid dropdown">
            <option></option>
            <option value="Fitness">Fitness</option>
            <option value="Mental Health">Mental Health</option>
            <option value="Diet">Diet</option>
            <option value="Non-Profit Incentive"></option>
          </select>
        </div>
      </div>
      <div className="required field">
        <label>Title</label>
        <input name="title" type="text" placeholder="Enter Title of Blog" />
      </div>
      <div className="field">
        <label>Blog Content</label>
        <textarea name="body" placeholder="Enter Blog content"></textarea>
      </div>
      <div className="required field">
        <label>Image/Video File</label>
        <input type="file" name="media" />
      </div>
      <button className="ui button primary" type="submit">Submit</button>
    </form>
  );
};

export default BlogForm;
