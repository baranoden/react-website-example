import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Menu = () => (
  <>
    <p>
      <a href="#home">Ana Sayfa</a>
    </p>
    <p>
      <a href="#wsms">Vatan SMS Nedir?</a>
    </p>
    <p>
      <a href="#possibility">Kullanım</a>
    </p>
    <p>
      <a href="#grid">Tarifeler</a>
    </p>
  </>
);

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="sms__navbar">
      <div className="sms__navbar-links">
        <div className="sms__navbar-links_logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="sms__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="sms__navbar-sign">
        <p>Giriş Yap</p>
        <button type="button">Kayıt Ol</button>
      </div>
      <div className="sms__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="sms__navbar-menu_container scale-up-center">
            <div className="sms__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="sms__navbar-menu_container-links-sign">
              <p>Giriş Yap</p>
              <button type="button">Kayıt Ol</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
