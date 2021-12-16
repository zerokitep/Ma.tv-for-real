import React, { useContext } from "react";
import requests from "../store/requests";
import "../../styles/home.css";
import Row from "../component/Row";

export const Home = () => {
  return (
    <div className="text-center mt-5">
      <h1>MA-TV</h1>
      <Row tittle="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row tittle="MA-TV ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row tittle="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row tittle="Action" fetchUrl={requests.fetchActionMovies} />
      <Row tittle="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row tittle="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row tittle="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row tittle="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};
