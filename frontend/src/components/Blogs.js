import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getAllBlogs } from '../actions';
import AuthorInfo from './AuthorInfo';
import './Blogs.css';
import CreateBut from './CreateBut';
import FilterBut from './FilterBut';

class Blogs extends React.Component {
  componentDidMount() {
    this.props.getAllBlogs();
  }

  renderButtons = () => {
    if (this.props.isSignedIn) {
      return (
        <Link to="/blog/new">
          <CreateBut />
        </Link>
      );
    }
  };

  renderBlogs = () => {
    return this.props.blogs.map((blog, index) => {
      if (!blog) {
        return null;
      }

      const src = `http://localhost:4000/${blog.media}`;

      return (
        <div className="ui attached message" key={blog._id}>
          <div className="content">
            <div className="header">
              <AuthorInfo
                avatar={blog.userid.image}
                author={blog.userid.fullname}
                time={new Date(new Date(blog.date)).toUTCString()}
                label={blog.label}
                qualification={blog.userid.qualifications}
              />
            </div>
          </div>

          <div className="content">
            <img src={src} alt={blog.title} className="ui image" />
            <video width="0" height="0"></video>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        {this.renderBlogs()}
        {this.renderButtons()}
        <FilterBut />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    blogs: Object.values(state.blogs),
  };
};

export default connect(mapStateToProps, { getAllBlogs })(Blogs);
