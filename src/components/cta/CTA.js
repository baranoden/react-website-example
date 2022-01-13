import React from "react";
import "./cta.css";

function CTA() {
  return (
    <div className="sms__cta">
      <div className="sms__cta-content">
        <p>Sadece 3 saniye iletim süresi ile hızınıza hız katıyoruz.</p>
        <h3>Hızlı Gönderim</h3>
      </div>
      <div className="sms__cta-btn">
        <button type="button">HEMEN TEST EDİN</button>
      </div>
    </div>
  );
}

export default CTA;
