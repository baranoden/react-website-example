import React from "react";
import "./brand.css";
import { playicon, huaweiicon, appleicon } from "./import";

function Brand() {
  return (
    <div className="sms__brand section__padding">
      <button>
        <img src={playicon} alt="googlplay" />
        <p>Google Play</p>
      </button>
      <button>
        <img src={appleicon} alt="appleicon" />
        <p>Apple Store</p>
      </button>
      <button>
        <img src={huaweiicon} alt="huaweiicon" />
        <p>Huawei Store</p>
      </button>
    </div>
  );
}

export default Brand;
