import React from 'react';
import { Link } from 'react-router-dom';
import "../../../styles/Styles.css";
import logo from "../../../img/boxing-gloves.png";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid justify-content-center">
                    <Link className="navbar-brand" to="/mainPage"><img src={logo} alt="" width="40" height="34" class="d-inline-block align-text-top" />
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
