import React from 'react';
import { NavLink, withRouter } from "react-router-dom";

import '../static/navigation.css'
import homeLogo from '../images/home-logo.png';
import menuLogo from '../images/menu-logo.png';
import contactLogo from '../images/contact-logo.png';
import slice from '../images/pizza-slice.png';
import logo from '../images/logo.png';

function Navigation(props) {
    return (
        <div>
            <div className="navbar">

                <div className="images">
                    <NavLink exact style={{ zIndex: "1"}} to="/"><img className="slice-image" src={slice} alt="/" /></NavLink>
                    <NavLink exact to="/menu"><img className="logo-image" src={logo} alt="/logo" /></NavLink>
                </div>

                <div>
                <ul className="main-nav">
                    <li>
                        <NavLink exact className="nav-link" activeClassName="current" to="/">
                            <img height="40" width="40" src={homeLogo} alt="/" />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact className="nav-link" activeClassName="current" to="/menu">
                            <img height="40" width="40" src={menuLogo} alt="/" />
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact className="nav-link" activeClassName="current" to="/contact">
                            <img height="40" width="40" src={contactLogo} alt="/" />
                            Contact
                        </NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Navigation);
