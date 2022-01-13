import React from "react";
import "./grid.css";
import { Product } from "../../components";

const productData = [
  {
    title: "MİNİ PAKET",
    price: "₺35",
    exp: "1.000 KREDİ",
    exp2: "Süresiz kullanım",
    exp3: "Taahütsüz",
  },
  {
    title: "MİDİ PAKET",
    price: "₺65",
    exp: "2.500 KREDİ",
    exp2: "Süresiz kullanım",
    exp3: "Taahütsüz",
  },
  {
    title: "EKO PAKET",
    price: "₺115",
    exp: "5.000 KREDİ",
    exp2: "Süresiz kullanım",
    exp3: "Taahütsüz",
  },
  {
    title: "SÜPER PAKET",
    price: "₺184",
    exp: "10.000 KREDİ",
    exp2: "Süresiz kullanım",
    exp3: "Taahütsüz",
  },
  {
    title: "PRO PAKET",
    price: "₺439",
    exp: "25.000 KREDİ",
    exp2: "Süresiz kullanım",
    exp3: "Taahütsüz",
  },
  {
    title: "PLUS PAKET",
    price: "₺849",
    exp: "50.000 KREDİ",
    exp2: "Süresiz kullanım",
    exp3: "Taahütsüz",
  },
  {
    title: "MEGA PAKET",
    price: "₺1599",
    exp: "100.000 KREDİ",
    exp2: "Süresiz kullanım",
    exp3: "Taahütsüz",
  },
  {
    title: "GOLD PAKET",
    price: "TEKLİF AL",
    exp: "250.000 KREDİ",
    exp2: "Süresiz kullanım",
    exp3: "Taahütsüz",
  },
];

function Grid() {
  return (
    <div className="sms__grid section__padding" id="grid">
      <div className="sms__grid-heading">
        <h1 className="gradient__text">TOPLU SMS PAKETLERİ</h1>
        <p>
          Toplu SMS fiyatları tablosunda müşterilerimiz tarafından en çok talep
          gören toplu sms paketleri listelenmiştir. Ücretlere KDV ve ÖTV dahil
          olup, paketlerimizin herhangi bir kullanım süresi bulunmamaktadır.
          Diğer sms paketleri için lütfen iletişime geçiniz. Kurumunuz için
          tarife ve hizmet kalitesi dengesinde en uygun toplu sms fiyatlarını
          VatanSMS'te bulacaksınız.
        </p>
      </div>
      <div className="sms__grid-container">
        <div className="sms__grid-container_groupB">
          {productData.map((item, index) => (
            <Product
              title={item.title}
              price={item.price}
              exp={item.exp}
              exp2={item.exp2}
              exp3={item.exp3}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Grid;
