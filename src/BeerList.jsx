import React from "react";
import BeerItem from "./BeerItem";
import light from "../public/assets/beericons/light.gif";
import medium from "../public/assets/beericons/medium.gif";
import dark from "../public/assets/beericons/dark.gif";
import stout from "../public/assets/beericons/stout.gif";

const BeerList = ({ beerData }) => {
  const leftList = Object.values(beerData).slice(0, 4);
  const leftDrinkImg = Object.values(beerData).slice(8, 12);
  const rightList = Object.values(beerData).slice(4, 8);
  const rightDrinkImg = Object.values(beerData).slice(12, 17);

  const imgMap = (e) => {
    console.log(e);
    switch (e.toLowerCase()) {
      case "light":
        return light;
      case "medium":
        return medium;
      case "dark":
        return dark;
      case "stout":
        return stout;
    }
  };

  return (
    <div className="beer-container">
      {/* left list */}
      <div className="beer-item-container">
        {leftList.map((beer, idx) => {
          return (
            <BeerItem
              beer={beer}
              img={imgMap(leftDrinkImg[idx])}
              idx={idx}
              key={idx}
            />
          );
        })}
      </div>
      {/* right list */}
      <div className="beer-item-container">
        {rightList.map((beer, idx) => {
          return (
            <BeerItem
              beer={beer}
              img={imgMap(rightDrinkImg[idx])}
              idx={idx + 4}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BeerList;
