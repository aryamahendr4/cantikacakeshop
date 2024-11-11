// src/components/Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function sendMessageToWhatsapp(nama, pesan) {
  const phoneNumber = '6287723477762'; // Ganti dengan nomor telepon penerima
  const message = `Halo, saya ${nama}. Pesan saya: ${pesan}`;
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}


function Kontak() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const nama = e.target.nama.value;
    const pesan = e.target.pesan.value;
    sendMessageToWhatsapp(nama, pesan);
  };

  return (
  <section className='kontak' id='kontak'>
    <div className='titleSection'>
      <h1>Kontak Kami yuk!</h1>
    </div>
    <div className='containerKontak'>
      <div className='kontakGrid'>
        <div className='kontakKiri'>
          <div className='maps'>
          <iframe title='mapsFrame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31550.940284536955!2d115.2094180063211!3d-8.704127299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2410986ba0399%3A0x21199f93ce471ad5!2sCantika%20Kue!5e0!3m2!1sid!2sid!4v1730714181434!5m2!1sid!2sid"></iframe>
          </div>
          <div className='sosialMedia'>
            <a href="https://www.instagram.com/teatersangsaka/"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.instagram.com/teatersangsaka/"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="https://www.instagram.com/teatersangsaka/"><FontAwesomeIcon icon={faTiktok} /></a>
            <a href="https://www.instagram.com/teatersangsaka/"><FontAwesomeIcon icon={faFacebook} /></a>          
          </div>
        </div>

        <div className='kontakKanan'>
          <h3>Yuk Hubungi Kami, tanyakan apapun!</h3>
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nama" className="form-label">Nama</label>
              <input type="text" id="nama" className="form-input" placeholder="Ketik nama anda disini..." required />
            </div>
            <div className="form-group">
              <label htmlFor="pesan" className="form-label">Pesan</label>
              <textarea id="pesan" rows="4" className="form-textarea" placeholder="Ketik pesan anda disini..."></textarea>
            </div>
            <button type="submit" className="form-button">Kirim</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Kontak;
