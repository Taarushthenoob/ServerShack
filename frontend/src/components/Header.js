import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import GoogleAuth from './GoogleAuth';
import './Header.css';
import Logo from '../assets/images/logo.png';

const Header = (props) => {
  const renderNonProfitOrg = () => {
    if (props.isSignedIn) {
      return (
        <Link to="/nonprofitorg/new" className="item">
          <button className="ui button green">
            Non-Profit Org? Update Profile!
          </button>
        </Link>
      );
    }
  };

  const renderCompleteProf = () => {
    if (props.isSignedIn) {
      return (
        <Link to="/QualForm" className="item">
          <button className="medium ui purple button">
            Complete Your Profile!
          </button>
        </Link>
      );
    }
  };

  return (
    <div className="ui stackable menu">
      <Link to="/" className="item">
        <img src={Logo} alt="logo" style={{ width: 30, height: 30 }} />
        <h2>Healthify</h2>
      </Link>
      <div className="right menu">
        {renderCompleteProf()}
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/blogs" className="item">
          Find Your Jam
        </Link>
        <Link to="/help" className="item">
          Help
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
