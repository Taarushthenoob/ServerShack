import React from 'react';
import { connect } from 'react-redux';

import history from '../history';
import BlogForm from './BlogForm';

class NewBlog extends React.Component {
  onSubmit(formValues) {
    console.log(formValues);
  }

  renderBlogForm() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ marginTop: '2rem' }}>
          <h2 className="header">Add a New Blog</h2>
          <BlogForm onSubmit={this.onSubmit} />
        </div>
      );
    } else {
      history.push('/');
    }
  }

  render() {
    return <React.Fragment>{this.renderBlogForm()}</React.Fragment>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(NewBlog);
