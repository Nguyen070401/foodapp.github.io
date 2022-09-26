import React from 'react';
import '../styles/style.css';
import logo from  '../assets/logo.png'

const Footer = () => {
  return (
    <>
    <footer id="footer">
    <img width="206" height="102" viewBox="0 0 206 102" fill="none" src={logo} alt="Demonstração" draggable="false"/>

        <ul>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        </ul>

        <p>&copy; Copyright 2021 Bella Onojie.com</p>
    </footer>
    </>

  );
};

export default Footer;
