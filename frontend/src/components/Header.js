import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import GoogleAuth from './GoogleAuth';
import './Header.css';

const Header = (props) => {
  const renderNonProfitOrg = () => {
    if (props.isSignedIn) {
      return (
        <Link to="/nonprofitorg/new" className="item">
          <button className="ui button green">Non-Profit Organization</button>
        </Link>
      );
    }
  };

  return (
    <div className="ui stackable menu">
      <Link to="/" className="item">
        <h2>Healthify</h2>
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/blogs" className="item">
          Find Your Jam
        </Link>
        <Link to="/help" className="item">
          Want Help
        </Link>
        <span className="item">
          <GoogleAuth />
        </span>
        {renderNonProfitOrg()}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(Header);
