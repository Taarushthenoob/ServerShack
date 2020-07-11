import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        <h3>Healthify</h3>
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/videoandimages" className="item">
          Find Your Jam
        </Link>
        <Link to="/blogs" className="item">
          Blogs
        </Link>
        <Link to="/help" className="item">
          Want Help
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
