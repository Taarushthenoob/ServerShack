import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getAllBlogs } from '../actions';
import AuthorInfo from './AuthorInfo';
import './Blogs.css';
import CreateBut from './CreateBut';
import FilterBut from './FilterBut';

const Blogs = (props) => {
  useEffect(() => {
    props.getAllBlogs();
  });
  const renderButtons = () => {
    if (props.isSignedIn) {
      return (
        <Link to="/blog/new">
          <CreateBut />
        </Link>
      );
    }
  };

  const renderBlogs = () => {
    return props.blogs.map((blog) => {
      if (!blog) {
        return null;
      }

      if (!blog.userId) {
        return null;
      }

      return (
        <div className="ui attached message" key={blog._id}>
          <div className="content">
            <div className="header">
              <AuthorInfo
                avatar={blog.userId.image}
                author={blog.userId.fullname}
                time={new Date(blog.date)}
                label={blog.label}
                qualification={blog.userId.qualifications}
              />
            </div>
          </div>

          <div className="content">
            <img src={blog.media} alt={blog.title} className="ui image" />
            <video width="0" height="0"></video>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        </div>
      );
    });
  };
  return (
    <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
      {renderBlogs()}
      {renderButtons()}
      <FilterBut />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    blogs: Object.values(state.blogs),
  };
};

export default connect(mapStateToProps, { getAllBlogs })(Blogs);
