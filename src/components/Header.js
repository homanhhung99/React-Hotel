import React, { Component } from 'react';
import { Link, NavLink, NavNavLink  } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="container-header">
                <div className="top-header">
                    <div className="rowH left-header">
                    <span className="languages"><i className="fas fa-globe-americas" /> LANGUAGES</span>
                    <span className="EN">EN</span>
                    <span className="VN">VN</span>
                    <span className="our-social"><i className="fab fa-digital-ocean" /> OUT SOCICAL</span>
                    <i className="icon fab fa-facebook-f" />
                    <i className="icon fab fa-twitter" />
                    <i className="icon fab fa-pinterest-square" />
                    </div>
                    <div className="rowH right-header">
                    <NavLink to="/login">
                    <span className="login">LOGIN</span>
                    </NavLink>
                    <span className="our-rooms"><i className="far fa-star" /> OUT ROOMS</span>
                    <span className="contact-us"><i className="fas fa-map-marker-alt" /> CONTACT US</span>
                    </div>
                </div>
                <div className="logo">
                    <a href><img src="image/logo.png" alt="" /></a>
                </div>
                <div className="menu-header">
                    <NavLink to="/home/">HOME</NavLink>
                    <NavLink to="/our-rooms/">OUR ROOMS</NavLink>
                    <NavLink to="/about-us/">ABOUT US</NavLink>
                    <NavLink to="/news/">NEWS</NavLink>
                    <NavLink to="/contact/">CONTACT</NavLink>
                    <button className="btn-booknow">BOOK NOW</button>
                </div>
            </div>

        );
    }
}

export default Header;
