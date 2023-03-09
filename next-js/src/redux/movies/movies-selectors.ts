import { RootState } from "../store";

export const getMovies = (state: RootState): MoviesSearchResult =>
  state.movies.movies;

export const getMovieDetails = (state: RootState): MovieDetailsSearchResult =>
  state.movies.movieDetails;
