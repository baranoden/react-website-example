import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
import comodo from "../../assets/comodo.png";

function Footer() {
  return (
    <div className="sms__footer section__padding">
      <div className="sms__footer-links">
        <div className="sms__footer-links_logo">
          <img src={logo} alt="sms_logo" />
          <p>
            Vatansms.Net, Bilgi Teknolojileri Kurumu (BTK)'dan işletmeci
            lisansına sahip Evyapan Bilgi Teknolojileri Tic.Ltd.Şti. ad ve
            hesabına işlem yapmaktadır,
            <br /> <br /> COPYRIGHT © 2022 - TÜM HAKLARI SAKLIDIR
          </p>
        </div>
        <div className="sms__footer-links_div">
          <h4>Linkler</h4>
          <p>Facebook</p>
          <p>Twitter</p>

          <p>SMS API</p>
        </div>
        <div className="sms__footer-links_div">
          <h4>Şirket</h4>
          <p>Hizmet Sözleşmesi </p>
          <p>Gizlilik Sözleşmesi</p>
          <p>Abone Sözleşmesi</p>
        </div>
        <div className="sms__footer-links_div">
          <h4>Bize Ulaşın</h4>
          <p>
            Cumhuriyet Mah. Gürpınar Yolu Cad. No:5/A Kaya Millenium İş Merkezi
            Kat: 8 Daire 147 Büyükçekmece, İstanbul
          </p>
          <p>0212 852 6465</p>
          <p>destek@vatansms.net</p>
        </div>
      </div>

      <div className="sms__footer-copyright">
        <img src={comodo} alt="comodo" />
      </div>
    </div>
  );
}

export default Footer;
