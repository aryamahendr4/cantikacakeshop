import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './component/navbar.js'; 
import Beranda from './component/beranda.js';
import Tentang from './component/tentang.js';
import Produk from './component/produk.js';
import Kontak from './component/kontak.js';
import Footer from './component/footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Beranda />
    <Tentang />
    <Produk />
    <Kontak />
    <Footer />
  </React.StrictMode>
);

// Untuk mengukur performa, tambahkan reportWebVitals sesuai kebutuhan.
reportWebVitals();
