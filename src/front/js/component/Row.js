import React, { useState, useEffect } from "react";
import axios from "../store/axios";
import "../../styles/Row.css";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //  if [] run once when the row loads and dont run it again.
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);

  return (
    <div className="row">
      <h2>{title} </h2>
      <div className="row_poster">
        {movies.map((movie) => (
          <img
            className="row_poster"
            src="{`${base_url}${movie.poster_path}`} alt={movie.name}"
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
