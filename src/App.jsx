import { useEffect, useRef, useState } from "react";
import Events from "./Events";
import Home from "./Home";

const App = () => {
  const homeRef = useRef(null);
  const eventsRef = useRef(null);

  const views = [homeRef, eventsRef];
  const [currIdx, setCurrIdx] = useState(0);
  // const [delay, setDelay] = useState(10000);

  /*   let delay = 10000;
  // todo implement scrolling carasoul
  useEffect(() => {
    const to = setTimeout(() => {
      views[currIdx].current.scrollIntoView();
      setCurrIdx((prevIdx) => (prevIdx === views.length - 1 ? 0 : prevIdx + 1));
      // setDelay((prev) => (prev === 1000 ? 5000 : 1000));
    }, 10000);
    clearInterval(to);
  }, [currIdx]); */

  return (
    <div className="app">
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={eventsRef}>
        <Events />
      </div>
    </div>
  );
};

export default App;
