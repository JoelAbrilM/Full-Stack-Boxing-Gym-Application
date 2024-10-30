import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../img/logo.png';

export const Logo = () => {
  return (
  <div>
    <Link type="button" to="/mainPage">
        <img src={logo} alt="Logo" style={{ width: '60px', height: 'auto', paddingLeft: '20px', paddingTop: '20px' }} />
    </Link>


  </div>
);
};

