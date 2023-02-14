import React from "react";
import Header from "./Header";
import useAxios from "./hooks/useAxios";
import axios from "./apis/axios";
import EventCard from "./EventCard";

const Events = () => {
  const query = `
  query data  {
    posts  { 
        data  {
            id
            attributes {
                Title
                Body
                Expiration 
                Media {
                    data {
                        attributes {
                            formats
                        }
                    }
                }
            }
        }
    }
    }
`;
  const today = new Date();
  // console.log(today.toLocaleDateString()); //2/13/2023

  const [data, error, loading] = useAxios({
    axiosInstance: axios,
    method: "POST",
    url: "/",
    requestConfig: { query },
    data: {},
  });

  const posts = data?.data;
  if (data) {
    const filteredPost = posts.posts.data.filter((post) => {
      const postDate = new Date(post.attributes.Expiration);
      return (
        post.attributes.Expiration === null ||
        postDate.toLocaleDateString() > today.toLocaleDateString()
      );
    });
    const randPost = Math.floor(Math.random() * filteredPost.length);
  }

  return (
    <div id="event-section">
      <div className="event-container">
        <Header>Events and Annoucements</Header>
        <div className="card-container">
          {posts &&
            posts.posts.data
              .filter((post) => {
                const postDate = new Date(post.attributes.Expiration);
                return (
                  post.attributes.Expiration === null ||
                  postDate.toLocaleDateString() > today.toLocaleDateString()
                );
              })
              .map((post) => <EventCard data={post} key={post.id} />)}
          {/* {filteredPost && <EventCard data={filteredPost} />} */}
          {/* {posts && <Event data={filteredPost} />} */}
        </div>
      </div>
    </div>
  );
};

export default Events;
