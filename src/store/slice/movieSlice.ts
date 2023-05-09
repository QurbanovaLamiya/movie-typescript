import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


type Movie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

type InitialState = {
  loading: boolean;
  movies: Movie[];
  error: string;
};

const initialState: InitialState = {
  loading: false,
  movies: [],
  error: "",
};

export const fetchMovie = createAsyncThunk("movie/fetchMovie", () => {
  return axios
    .get("http://www.omdbapi.com/?apikey=a407a7b3&s=movie")
    .then((res) => res.data.Search);
});

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchMovie.fulfilled,
      (state, action: PayloadAction<Movie[]>) => {
        state.loading = false;
        state.movies = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchMovie.rejected, (state, action) => {
      state.loading = false;
      state.movies = [];
      state.error = action.error.message || "";
    });
  },
});

export default movieSlice.reducer;
