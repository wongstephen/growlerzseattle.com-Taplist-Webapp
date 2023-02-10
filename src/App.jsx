import { useEffect, useRef, useState } from "react";
import Events from "./Events";
import Home from "./Home";

const App = () => {
  const homeRef = useRef(null);
  const eventsRef = useRef(null);

  const views = [homeRef, eventsRef];
  const [currentIdx, setCurrentIdx] = useState(0);

  // todo implement scrolling carasoul
  // let idx = 0;
  // function carasoul() {
  //   setInterval(() => {
  //     if (idx < 1) {
  //       idx = 0;
  //     } else {
  //       idx++;
  //     }
  //     views[1].current.scrollIntoView();
  //     console.log(idx);
  //     // setCurrentIdx((prev) => prev++);
  //   }, 10000);
  // }
  // carasoul();

  return (
    <div className="app">
      <Home homeRef={homeRef} />
      <Events eventsRef={eventsRef} />
    </div>
  );
};

export default App;
