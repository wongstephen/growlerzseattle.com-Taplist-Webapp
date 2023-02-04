import { useState } from "react";
import light from "../public/assets/beericons/light.gif";
import medium from "../public/assets/beericons/medium.gif";
import dark from "../public/assets/beericons/dark.gif";
import stout from "../public/assets/beericons/stout.gif";
import logo from "../public/assets/logo-clear-bg.webp";

function App() {
  const initalBeerState = {
    "Everybody Hazy IPA": medium,
    "Great Notion Oatmeal Stout": stout,
    "Fort George Three Way IPA": medium,
    "Seapine Super Super Super Super Super Super Super Super Cripsy IPA": dark,
    "Fair Isle Bobby": light,
    "Lowercase Blonde": light,
    "Halycon Amber": dark,
    "Fremont Really Really Really Really Winter Ale": dark,
    "Fremont Really Really Really Really Winter Ale1": dark,
    "Fremont Really Really Really Really Winter Ale2": dark,
  };

  const [beerData, setBeerDat] = useState(initalBeerState);

  return (
    <div className="App">
      <div className="app-container">
        <header>
          <div>
            <img src={logo} className="logo" />
          </div>
          <h1>Beer Menu</h1>
        </header>
        <div className="beer-container">
          {Object.keys(beerData).map((beer, idx) => {
            return (
              <div key={beer + idx} className="beer-card">
                <div className="order-container">
                  <p className="order-text">{idx + 1}.</p>
                </div>
                <div>
                  <img src={beerData[beer]} />
                </div>
                <p className="beer-text">{beer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
