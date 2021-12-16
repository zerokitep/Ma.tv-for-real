import axios from "axios";

// Below is the base url to make requests to the movie database (used on Postman)
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
