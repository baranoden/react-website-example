import React from "react";
import { Feature } from "../../components";
import "./whatsms.css";

function WhatSMS() {
  return (
    <div className="sms__whatsms section__margin" id="wsms">
      <div className="sms__whatsms-feature">
        <Feature
          title="Vatan SMS nedir?"
          // text="Excel dosyanızda ister birkaç ister binlerce kayıt olsun, hiç farketmez.
          // Sisteme yükleyerek dilediğiniz sütündan numaraları seçerek anında binlerce gönderim yapabilirsiniz."
        />
      </div>
      <div className="sms__whatsms-heading">
        <h1 className="gradient__text">
          Excel ile ister dosyadan ister kopyala yapıştır stilinde gönderim
          imkanı
        </h1>
        {/* <p>İletişime Geç</p> */}
      </div>
      <div className="sms__whatsms-container">
        <Feature
          title="Toplu SMS Gönderimi"
          text=" Özel tasarım ile dilediğiniz sütundan verileri alarak her bir numaraya ayrı mesajlar oluşturabilir, onlara kendilerini ayrıcalıklı hissettirebilirsiniz."
        />
        <Feature
          title="İleri Tarihli Gönderim"
          text="İleri tarihli sms gönderimleri yapabilirsiniz...."
        />
        <Feature
          title="Rehbere Toplu SMS"
          text="Toplu şekilde rehberinize SMS atabilirsiniz."
        />
      </div>
    </div>
  );
}

export default WhatSMS;
