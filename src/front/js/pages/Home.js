import React, { useContext } from "react";
import requests from "../store/requests";
import "../../styles/home.css";
import Row from "../component/Row";

export const Home = () => {
  return (
    <div className="text-center mt-5">
      <h1>MA-TV</h1>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="MA-TV ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};
