import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthorInfo from './AuthorInfo';
import Logo from '../assets/images/work.jpg';
import './Blogs.css';
import CreateBut from './CreateBut';
import FilterBut from './FilterBut';

const Blogs = (props) => {
  const renderButtons = () => {
    if (props.isSignedIn) {
      return (
        <Link to="/blog/new">
          <CreateBut />
        </Link>
      );
    }
  };
  return (
    <div className="ui attached message">
      <div className="content">
        <div className="header">
          <AuthorInfo
            avatar={Logo}
            author="Rohit"
            time="12 July 2020, 8:50 AM"
            label="Mental Health"
            qualification="EEE BITS Goa"
          />
        </div>
      </div>

      <div className="content">
        <img src={Logo} alt="logo" className="ui image" />
        <video width="0" height="0"></video>
        <h3>Description</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
          blandit risus. Donec placerat lorem in luctus faucibus. Nam orci
          ipsum, fringilla tincidunt porttitor at, semper vel nibh. Nulla
          consectetur mauris urna, ut maximus mauris consectetur vitae. Fusce ac
          mauris eu purus ultricies dictum. Praesent ut enim in turpis tristique
          lobortis. Duis pharetra purus et ipsum tincidunt aliquam. Integer
          nulla augue, imperdiet id tempor nec, molestie quis augue. Vestibulum
          vel dui pretium, vehicula erat et, ornare orci. Aenean non imperdiet
          est, eget ultrices felis. Ut rhoncus turpis non ligula interdum
          lobortis. Aliquam sit amet eros nec turpis aliquam posuere. Ut
          convallis tortor id urna commodo dapibus. Phasellus mattis pretium
          enim, vitae maximus dolor. Nullam malesuada diam a vehicula tincidunt.
          Ut semper interdum tincidunt. Phasellus rutrum aliquet massa id
          ultrices. Mauris a diam nulla. Cras at mi facilisis, sagittis odio et,
          tristique mi. Nullam suscipit eu mauris in semper. Fusce leo justo,
          molestie id ullamcorper et, ultricies et nibh. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Donec aliquam at nulla et porttitor. Nam orci eros, auctor id
          vestibulum vel, tempor sed elit. Phasellus molestie pretium dolor sed
          tristique. Nullam aliquet finibus nisl id hendrerit. Fusce sagittis
          facilisis enim, vel aliquam turpis scelerisque eget. Suspendisse
          lectus tortor, pharetra a tortor vitae, semper blandit sapien.
        </p>
        {renderButtons()}
        <FilterBut />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(Blogs);
