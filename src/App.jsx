import { useEffect, useRef, useState } from "react";
import Events from "./Events";
import Home from "./Home";

const App = () => {
  const [showHome, setShowHome] = useState(false);

  // useEffect(() => {
  //   if (showHome) {
  //     setTimeout(() => {
  //       setShowHome((prev) => {
  //         return false;
  //       });
  //     }, 10000);
  //     // 10 min is 600000 ms
  //   } else {
  //     setTimeout(() => {
  //       setShowHome((prev) => {
  //         return true;
  //       });
  //     }, 5000);
  //     // 1 minutes is 60000 ms
  //   }
  // }, [setShowHome]);
  return (
    <div className="app">
      <Home />
    </div>
  );
  // return <div className="app">{showHome ? <Home /> : <Events />}</div>;
};

export default App;
