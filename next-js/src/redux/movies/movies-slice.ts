import { createSlice } from "@reduxjs/toolkit";
import { fetchGetMovies } from "./movies-operations";

const initialState: MoviesState = {
  movies: [],
  isLoading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.movies = action.payload;
      })
      .addCase(fetchGetMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === "string" ? action.payload : null;
      });
  },
});

export const moviesReducer = moviesSlice.reducer;
