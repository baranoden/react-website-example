import React from "react";
import "./features.css";
import { Feature } from "../../components/";

const featuresData = [
  {
    title: "Güleryüzlü Hizmet",
    text: "Her iletişime geçmenizde aynı güleryüzle hizmet vermekten mutlululuk duyuyoruz",
  },
  {
    title: "Sürekli Güncelleme",
    text: "Yetinmiyoruz, her geçen gün sistemimizi güncelliyor, ihtiyaçlarınızı karşılamanın peşinde koşuyoruz",
  },
  {
    title: "Güvenliyiz",
    text: "Sunucularımızı yüksek güvenlik donanımlarla besliyor, verilerinizin güvenliğini önemsiyoruz",
  },
];

function Features() {
  return (
    <div className="sms__features section__padding" id="features">
      <div className="sms__features-heading">
        <h1 className="gradient__text">Neden Seviliyoruz?</h1>
        {/* <p>Çünkü...</p> */}
      </div>
      <div className="sms__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
