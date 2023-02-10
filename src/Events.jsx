import React from "react";

const Events = ({ eventsRef }) => {
  return (
    <div id="event-section" ref={eventsRef}>
      <div className="event-container">Events</div>
    </div>
  );
};

export default Events;
