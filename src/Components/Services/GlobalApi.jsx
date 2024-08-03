import axios from "axios";

// const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "feec8715b7d6ca3db40f56ce079c28dc";

const GetTrendingMovies = axios.get(
  "https://api.themoviedb.org/3/trending/movie/week?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres" + id);

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=feec8715b7d6ca3db40f56ce079c28dc";

const GetTrendingSeries = axios.get(
  "https://api.themoviedb.org/3/trending/tv/week?api_key=" + api_key
);

const GetPopularActors = axios.get(
  "https://api.themoviedb.org/3/person/popular?api_key=" + api_key
);

const trending = axios.get(
  "https://api.themoviedb.org/3/movie/now_playing?api_key=" + api_key
);

export default {
  GetTrendingMovies,
  GetTrendingSeries,
  GetPopularActors,
  getMovieByGenreId,
  trending,
};
