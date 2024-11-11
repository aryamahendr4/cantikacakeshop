// src/components/Header.js
import React from 'react';
import logo from '../img/logo_cantika.png';


function Header() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo di bagian kiri */}
        <div className="footer-logo">
          <img src={logo} alt="Logo Cantika Cake Shop" />
        </div>
        
        {/* Navigasi di bagian kanan */}
        <ul className="footer-nav">
          <li><a href="#beranda">Beranda</a></li>
          <li><a href="#tentang">Tentang</a></li>
          <li><a href="#produk">Menu</a></li>
          <li><a href="#kontak">Kontak</a></li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        © 2024 Cantika Cake Shop. All rights reserved.
      </div>
    </footer>
  );
}

export default Header;
