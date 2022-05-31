import React from 'react';
import './Header.scss';
import { useNavigate } from 'react-router-dom';

function Header() {
  let navigate = useNavigate();

  return (
    <nav className="header">
      <div className="header--content">
        <div
          className="headline--container"
          onClick={() => {
            navigate(`/`);
          }}
        >
          <h1>Simple Drink Finder</h1>
        </div>
      </div>
    </nav>
  );
}

export default Header;
