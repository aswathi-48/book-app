
import React, { useContext, useState } from 'react';
import './Header.css';
import Navigation from './Navigation';

import logo from '../../assets/566b35c555201741bf0f962aed2b1ceb-removebg-preview.png';

const Header = () => {


  return (
    <div className='header'>
      <div className="container">
        <div className="header_items">
          <div className="logo">
            <img src={logo} alt="logo" width={60} />
          </div>         
          <div className="nav_items">
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
