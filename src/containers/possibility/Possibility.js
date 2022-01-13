import React from "react";
import "./possibility.css";
import perspective from "../../assets/perspective.png";

function Possibility() {
  return (
    <div className="sms__possibility section__padding" id="possibility">
      <div className="sms__possibility-image">
        <img src={perspective} alt="possibility" />
      </div>
      <div className="sms__possibility-content">
        <h1 className="gradient__text">Üye Kaydı Açın</h1>
        <h4>
          Basit formumuza ad,soyad ve telefon bilgilerinizle üye kaydınızı açın,
          anında sistemi denemeye başlayın
        </h4>
        <h1 className="gradient__text">Evraklarınızı Gönderin</h1>
        <h4>
          Üyelik türünüze göre evraklarınızı bize whatsapp veya mail yoluyla
          gönderin
        </h4>
        <h1 className="gradient__text">Kullanıma Hazır</h1>
        <h4>
          Maksimum 30 dakikada paneliniz kullanıma açılsın ve dilediğiniz paketi
          yükleyerek sms gönderimine başlayın
        </h4>
      </div>
    </div>
  );
}

export default Possibility;
