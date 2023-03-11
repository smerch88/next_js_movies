import { RootState } from "../store";

export const getMovies = (state: RootState): MoviesSearchResult =>
  state.movies.movies;
export const getMovieDetails = (state: RootState): MovieDetailsSearchResult =>
  state.movies.movieDetails;
export const getPage = (state: RootState): number => state.movies.page;
export const getQuery = (state: RootState): string => state.movies.query;
export const getType = (state: RootState): string => state.movies.type;
export const getYear = (state: RootState): string => state.movies.year;
export const getIsLoading = (state: RootState): boolean =>
  state.movies.isLoading;
export const getError = (state: RootState): string | null => state.movies.error;
export const getFavourites = (state: RootState): Movie[] =>
  state.movies.favourites;
