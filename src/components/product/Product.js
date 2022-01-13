import React from "react";
import "./product.css";

function Product({ title, price, exp, exp2, exp3 }) {
  return (
    <div className="sms__blog-container_product-board">
      <div className="sms__blog-container_product">
        <h4>{title}</h4>
        <h1 className="gradient__text">{price}</h1>
        <p>{exp}</p>
        <p>{exp2}</p>
        <p>{exp3}</p>
        <button className="button-product">SATIN AL</button>
      </div>
    </div>
  );
}

export default Product;
