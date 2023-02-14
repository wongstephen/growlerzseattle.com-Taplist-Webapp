import React from "react";

const EventCard = ({ data }) => {
  return (
    <div className="event-card">
      <div className="event-card-text">
        <h1>{data.attributes.Title}</h1>
        <p>{data.attributes.Body}</p>
      </div>
      {data?.attributes?.Media?.data?.attributes?.formats.medium.url && (
        <div className="event-card-img-container">
          <img
            className="card-img"
            src={
              "https://api.growlerzseattle.com" +
              data.attributes.Media.data.attributes.formats.medium.url
            }
          />
        </div>
      )}
    </div>
  );
};

export default EventCard;
