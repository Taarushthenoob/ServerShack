import React, { Component } from 'react';

class BlogForm extends Component {
  render() {
    return (
      <div style={{ marginTop: '2rem' }}>
        <h2 className="header">Add a New Blog</h2>
        <form className="ui form">
          <div className="field">
            <label>Blog Type</label>
            <select className="ui fluid dropdown">
              <option value="">Label</option>
              <option value="Fitness">Fitness</option>
              <option value="Mental Health">Mental Health</option>
              <option value="Diet">Diet</option>
              <option value="Non-Profit Incentive">Non-Profit Incentive</option>
            </select>
          </div>
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter the Blog Title"
            />
          </div>
          <div className="field">
            <label>Blog Content</label>
            <input type="text" name="body" placeholder="Enter Blog Content" />
          </div>
          <div className="field">
            <label>Image Link</label>
            <input type="file" />
          </div>
        </form>
      </div>
    );
  }
}

export default BlogForm;
