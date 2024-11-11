// src/components/Produk.js
import React from 'react';
import fotobolupandan from '../img/produk_bolu_pandan.jpg';
import fotochiffonkeju from '../img/produk_chiffon_keju.jpg';
import fotochiffoncoklat from '../img/produk_chiffon_coklat.jpg';


function Produk() {
  return (
    <section className='produk' id='produk'>
      <div className='titleSection'>
        <h1>Menu Kami</h1>
      </div>  
      <div className='containerItem'>
        <div className='menuGrid'>
          <div className='menuItem'>
            <img src={fotobolupandan} alt='kuecantika' />
            <div className='informasiBolu'>
              <h2>Bolu Pandan</h2>
              <h2>35K</h2>
            </div>
            <p>Kue bolu lembut dengan aroma pandan yang khas.</p>
          </div>
          <div className='menuItem'>
            <img src={fotochiffonkeju} alt='kuecantika' />
            <div className='informasiBolu'>
              <h2>Chiffon Keju</h2>
              <h2>45K</h2>
            </div>
            <p>Chiffon cake lembut dipadu dengan rasa keju yang gurih.</p>
          </div>
          <div className='menuItem'>
            <img src={fotochiffoncoklat} alt='kuecantika' />
            <div className='informasiBolu'>
              <h2>Chiffon Coklat</h2>
              <h2>40K</h2>
            </div>
            <p>Kue chiffon coklat yang moist dan kaya rasa coklat.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Produk;
