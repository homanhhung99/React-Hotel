import React, { Component } from 'react';

class Header_user extends Component {
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
      <span className="login">LOGIN</span>
      <span className="our-rooms"><i className="far fa-star" /> OUT ROOMS</span>
      <span className="contact-us"><i className="fas fa-map-marker-alt" /> CONTACT US</span>
    </div>
  </div>
  <div className="logo">
    <a href><img src="image/logo.png" alt="" /></a>
  </div>
  <div className="menu-header">
    <a href>HOME</a>
    <a href>OUR ROOMS</a>
    <a href>ABOUT US</a>
    <a href>NEWS</a>
    <a href>CONTACT</a>
    <a href>ACCOUNT</a>
    <button className="btn-booknow"> LogOut</button>
  </div>
</div>

        );
    }
}

export default Header_user;
