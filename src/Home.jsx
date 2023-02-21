import Header from "./Header";
import BeerList from "./BeerList";
import { useState } from "react";
import useAxios from "./hooks/useAxios";
import axios from "./apis/axios";

function Home() {
  const query = `
    query {
      tapList {
        data {
          attributes {
            BeerItem1
            BeerItem2
            BeerItem3
            BeerItem4
            BeerItem5
            BeerItem6
            BeerItem7
            BeerItem8
            BeerType1
            BeerType2
            BeerType3
            BeerType4
            BeerType5
            BeerType6
            BeerType7
            BeerType8
          }
        }
      }
    }
  `;

  // const [data, error, loading] = useAxios({
  //   axiosInstance: axios,
  //   method: "POST",
  //   url: "/",
  //   requestConfig: { query },
  //   data: {},
  // });

  const data = {
    BeerItem1: "Elysian Dark Ale",
    BeerItem2: "Russian River Pliny the Younger",
    BeerItem3: "Fair Isle Bobbi",
    BeerItem4: "Georgetown Bodihizifa",
    BeerItem5: "Georgetown Johnny Utah",
    BeerItem6: "Goose Island BBA Stout",
    BeerItem7: "Fremont BBA Coconut B-Bomb",
    BeerItem8: "Empty",
    BeerType1: "dark",
    BeerType2: "light",
    BeerType3: "medium",
    BeerType4: "medium",
    BeerType5: "light",
    BeerType6: "stout",
    BeerType7: "stout",
    BeerType8: "light",
  };

  // const beerList = data?.data.tapList.data.attributes;
  const beerList = data;
  // return
  // loading ? (
  //   <div className="loading-container" id="home-section">
  //     loading
  //   </div>
  // ) :
  // (
  //   <div className="home-container" id="home-section">
  //     <Header>Growlerz Beer Menu</Header>
  //     <BeerList beerData={beerList} />
  //   </div>
  // );
  return (
    <div className="home-container" id="home-section">
      <Header>Growlerz Beer Menu</Header>
      <BeerList beerData={beerList} />
    </div>
  );
}

export default Home;
