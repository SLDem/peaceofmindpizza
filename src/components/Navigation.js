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

                        <ul className="main-nav">
                            <li>
                                <NavLink exact className="nav-link" activeClassName="current" to="/">
                                    <img height="35" width="35" src={homeLogo} alt="/" />
                                    <span>Home</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact className="nav-link" activeClassName="current" to="/menu">
                                    <img height="35" width="35" src={menuLogo} alt="/" />
                                    <span>Menu</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact className="nav-link" activeClassName="current" to="/contact">
                                    <img height="35" width="35" src={contactLogo} alt="/" />
                                    <span>Contact</span>
                                </NavLink>
                            </li>
                        </ul>

            </div>
        </div>
    );
}

export default withRouter(Navigation);
