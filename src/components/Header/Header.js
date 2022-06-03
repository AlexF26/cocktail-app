import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="header">
      <div className="header--content">
        <Link className="headline--container" to="/">
          <h1>Simple Drink Finder</h1>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
