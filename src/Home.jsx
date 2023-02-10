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

  const [beerData, setBeerData] = useState({});
  const [data, error, loading] = useAxios({
    axiosInstance: axios,
    method: "POST",
    url: "/",
    requestConfig: { query },
    data: {},
  });

  const beerList = data?.data.tapList.data.attributes;

  return loading ? (
    <div className="loading-container" id="home-section">
      loading
    </div>
  ) : (
    <div className="home-container" id="home-section">
      <Header>Growlerz Beer Menu</Header>
      <BeerList beerData={beerList} />
    </div>
  );
}

export default Home;
