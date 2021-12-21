import React, { useState, useEffect } from "react";
import "../../styles/Top.css";
import axios from "../store/axios";
import requests from "../store/requests";

// const base_url = "https://image.tmdb.org/t/p/original/";
const Top = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);

  // truncate is basically when you have too much words on the screen and you want to cut it short ex “...”
  // using this function to truncate after the description reaches 150 characters
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="top"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
    )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="top_contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        {/* <div className="top_buttons">
          <button className="top_button">Play</button>
          <button className="top_button">My List</button>
        </div> */}
        <h1 className="top_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="top-fadeBottom" />
    </header>
  );
};
// truncate is basically when you have too much words on the screen and you want to cut it short ex "..."
// using this function to truncate after the description reaches 150 characters

export default Top;
