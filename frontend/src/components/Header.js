import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';
import './Header.css';

const Header = () => {
  return (
    <div className="ui stackable menu">
      <Link to="/" className="item">
        <h2>Healthify</h2>
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
        <Link className="item">
          <GoogleAuth />
        </Link>
      </div>
    </div>
  );
};

export default Header;
