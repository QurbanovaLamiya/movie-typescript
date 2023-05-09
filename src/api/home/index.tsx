import axios from "axios";
import { Movie, MoviesData } from "../../types";

export const moviesAPI = axios.get<MoviesData[]>(
  "http://www.omdbapi.com/?apikey=a407a7b3&s=movie"
);
