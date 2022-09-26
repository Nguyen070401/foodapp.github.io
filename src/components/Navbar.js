import React from 'react';
import '../styles/style.css';
import logo from  '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="navigation">
    <div className="logo-list">
        <img width="190" height="90" viewBox="0 0 206 102" fill="none" src={logo} alt="Logo" draggable="false"/>              
    </div>

    <div className="openMenu"><i className="fa fa-bars"></i></div>
    <ul className="menu-list">
        <div className="closeMenu"><i className="fa fa-times"></i></div>
        <li className="menu-item"><a className="home" href="#introduce">
            Home</a>
        </li>
        <li className="menu-item"><a href="#steps">Product</a></li>
        <li className="menu-item"><a href="#">Faq</a></li>
        <li className="menu-item"><a href="#footer">Contact</a></li>
    </ul>
</div>

  );
};

export default Navbar;
