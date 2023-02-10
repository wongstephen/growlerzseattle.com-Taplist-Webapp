import React from "react";

const BeerItem = ({ beer, idx, img }) => {
  return (
    <div className="beer-card-container">
      <div className="beer-card-num">
        <p>{idx + 1}.</p>
      </div>
      <div className="beer-card-img">
        <img src={img} />
      </div>
      <div className="beer-card-title">
        <p>{beer}</p>
      </div>
    </div>
  );
};

export default BeerItem;
