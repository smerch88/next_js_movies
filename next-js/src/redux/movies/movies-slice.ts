import { createSlice } from "@reduxjs/toolkit";
import { fetchGetMovieDetails, fetchGetMovies } from "./movies-operations";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  movies: MoviesSearchResult;
  movieDetails: MovieDetailsSearchResult;
  page: number;
  query: string;
  isLoading: boolean;
  error: string | null;
} = {
  movies: {
    Search: [],
    totalResults: "0",
    Response: "False",
  },
  movieDetails: {
    Title: "",
    Year: "",
    Rated: "",
    Released: "",
    Runtime: "",
    Genre: "",
    Director: "",
    Writer: "",
    Actors: "",
    Plot: "",
    Language: "",
    Country: "",
    Awards: "",
    Poster: "",
    Ratings: [],
    Metascore: "",
    imdbRating: "",
    imdbVotes: "",
    imdbID: "",
    Type: "",
    DVD: "",
    BoxOffice: "",
    Production: "",
    Website: "",
    Response: "",
  },
  page: 1,
  query: "",
  isLoading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchGetMovies.fulfilled,
        (state, action: PayloadAction<MoviesSearchResult>) => {
          state.isLoading = false;
          state.error = null;
          state.movies = action.payload;
        }
      )
      .addCase(fetchGetMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === "string" ? action.payload : null;
      })
      .addCase(fetchGetMovieDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchGetMovieDetails.fulfilled,
        (state, action: PayloadAction<MovieDetailsSearchResult>) => {
          state.isLoading = false;
          state.error = null;
          state.movieDetails = action.payload;
        }
      )
      .addCase(fetchGetMovieDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === "string" ? action.payload : null;
      });
  },
});

export const { setPage } = moviesSlice.actions;
export const { setQuery } = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
