import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import iphonex from "../../assets/iphonex.png";

function Header() {
  return (
    <div className="sms__header section__padding" id="home">
      <div className="sms__header-content">
        <h1 className="gradient__text">Reklamın en hızlı ve ekonomik yolu</h1>
        <p>
          Saniyeler içinde binlerce kişiye ulaşabilir, onlara ürünlerinizi
          tanıtabilirsiniz.
        </p>

        <div className="sms__header-content__input">
          <input type="email" placeholder="E-posta Adresiniz" />
          <button type="button">Kayıt Ol</button>
        </div>

        <div className="sms__header-content__people">
          <img src={people} alt="people" />
          <p>
            24 saat içerisinde 1,600den fazla kişi admin paneline giriş yaptı
          </p>
        </div>
      </div>

      <div className="sms__header-image">
        <img src={iphonex} alt="people" />
      </div>
    </div>
  );
}

export default Header;
