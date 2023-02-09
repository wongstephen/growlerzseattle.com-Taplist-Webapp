import Header from "./Header";
import BeerList from "./BeerList";
import { useState } from "react";
import useAxios from "./hooks/useAxios";
import axios from "./apis/axios";

// style components
// todo need axios api for graphql
function App() {
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
  console.log(beerList);
  return loading ? (
    <div className="loading-container">loading</div>
  ) : (
    <div className="App">
      <div className="app-container">
        <Header>Growlerz Beer Menu</Header>
        <BeerList beerData={beerList} />
      </div>
    </div>
  );
}

export default App;
