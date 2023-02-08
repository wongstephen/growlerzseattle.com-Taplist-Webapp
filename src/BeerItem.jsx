import React from "react";

export const BeerItem = ({ beer, idx, img }) => {
  return (
    <div className="beer-card">
      <div className="order-container">
        <p className="order-text">{idx + 1}.</p>
      </div>
      <div>
        <img src={img} />
      </div>
      <p className="beer-text">{beer}</p>
    </div>
  );
};
