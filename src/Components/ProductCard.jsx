import React from "react";
import "../styles.css";

export default function ProductCard({ image, title, sales }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />

      <div className="product-info">
        <h4 className="product-title">{title}</h4>

        <p className="product-sales">{sales} Sales</p>

        <div className="stars">★★★★★</div>

        <div className="product-buttons">
          <button className="btn btn-details">Details</button>
          <button className="btn btn-live">Live Demo</button>
        </div>
      </div>
    </div>
  );
}
