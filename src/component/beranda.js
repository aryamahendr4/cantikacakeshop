// src/components/Header.js
import React from 'react';
import '../index.css';
import fotokue from '../img/popup_image.png';

function Beranda() {
  return (
    <section className='beranda' id='beranda'>
        <div className='containerBeranda'>
            <div className='namatoko'>
                <img src={fotokue} alt='kuecantika' className='popupImage' />
                <h1 className='cantika'>Cantika<br></br>Cake Shop</h1>
            </div>
            <div className='deskripsiToko'>
                <a href='#produk'><button>Yuk lihat menu!</button></a>
            </div>
        </div>
    </section>
  );
}

export default Beranda;
