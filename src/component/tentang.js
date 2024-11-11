// src/components/Header.js
import React from 'react';
import img_tentang from '../img/img_tentang.png';



function Tentang() {
  return (
  <section className='tentang' id='tentang'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFF8E8" fill-opacity="1" d="M0,192L12,202.7C24,213,48,235,72,218.7C96,203,120,149,144,112C168,75,192,53,216,53.3C240,53,264,75,288,106.7C312,139,336,181,360,202.7C384,224,408,224,432,197.3C456,171,480,117,504,106.7C528,96,552,128,576,154.7C600,181,624,203,648,202.7C672,203,696,181,720,170.7C744,160,768,160,792,170.7C816,181,840,203,864,208C888,213,912,203,936,186.7C960,171,984,149,1008,117.3C1032,85,1056,43,1080,69.3C1104,96,1128,192,1152,229.3C1176,267,1200,245,1224,224C1248,203,1272,181,1296,181.3C1320,181,1344,203,1368,192C1392,181,1416,139,1428,117.3L1440,96L1440,0L1428,0C1416,0,1392,0,1368,0C1344,0,1320,0,1296,0C1272,0,1248,0,1224,0C1200,0,1176,0,1152,0C1128,0,1104,0,1080,0C1056,0,1032,0,1008,0C984,0,960,0,936,0C912,0,888,0,864,0C840,0,816,0,792,0C768,0,744,0,720,0C696,0,672,0,648,0C624,0,600,0,576,0C552,0,528,0,504,0C480,0,456,0,432,0C408,0,384,0,360,0C336,0,312,0,288,0C264,0,240,0,216,0C192,0,168,0,144,0C120,0,96,0,72,0C48,0,24,0,12,0L0,0Z"></path></svg>
    <div className='containerTentang'>
        <div className='imgTentang'>
          <img src={img_tentang} alt=''></img>
        </div>
        <div className='deskripsiTentang'>
          <h2 className='titleSection'>Tentang Cantika Cake Shop</h2>
          <p>Selamat datang di Cantika Cake Shop! Kami adalah toko kue yang didirikan dengan cinta oleh seorang mahasiswa yang kini tengah mengerjakan skripsi, namun tak pernah meninggalkan kecintaannya pada dunia kuliner, terutama pembuatan kue. Sejak duduk di bangku sekolah dasar, memasak telah menjadi hobi dan pelampiasan kreativitas bagi pemilik kami.
              <br></br><br></br>
            Cantika Cake Shop mengutamakan kualitas dan rasa di setiap kue yang kami buat. Kami percaya bahwa kue tidak hanya soal cita rasa, tetapi juga seni dan kehangatan yang bisa membangkitkan kenangan manis. Dari bahan-bahan berkualitas tinggi hingga proses pembuatan yang cermat, setiap produk yang kami sajikan adalah buah dari semangat, keahlian, dan impian untuk menghadirkan kebahagiaan lewat gigitan kue.
          </p>
        </div>
    </div>
  </section>
  );
}

export default Tentang;
