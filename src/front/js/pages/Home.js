import React from "react";
import Top from "../component/Top";
import requests from "../store/requests";
import "../../styles/Home.css";
import Row from "../component/Row";
import Nav from "../component/Nav";
import logo from "./logo.png";

export const Home = () => {
  return (
    <div className="text-center mt-0 app">
      <Nav />
      <Top />
      <img className="main-logo" src={logo} alt="main-logo" />

      <Row
        className="title"
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      <Row
        className="title"
        title="MA-TV ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row
        className="title"
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        className="title"
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        className="title"
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        className="title"
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        className="title"
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        className="title"
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
};
