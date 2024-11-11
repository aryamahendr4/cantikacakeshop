// src/components/Navbar.js
import React from 'react';
import '../index.css';
import logo from '../img/logo_cantika.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" /> 
      </div>
      <ul className="nav-links">
        <li><a href="#beranda">Beranda</a></li>
        <li><a href="#tentang">Tentang</a></li>
        <li><a href="#produk">Produk</a></li>
        <li><a href="#kontak">Kontak</a></li>
      </ul>
      <a href="#produk" className="mobile-menu-button">Yuk Lihat Menu</a>
    </nav>
  );
}

export default Navbar;
