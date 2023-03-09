import { RootState } from "../store";

export const getMovies = (state: RootState): MoviesSearchResult =>
  state.movies.movies;

export const getMovieDetails = (state: RootState): MovieDetailsSearchResult =>
  state.movies.movieDetails;

export const getPage = (state: RootState): number => state.movies.page;
export const getQuery = (state: RootState): string => state.movies.query;
