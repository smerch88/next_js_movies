import axios, { AxiosResponse } from "axios";

const API_KEY = process.env.API_KEY;

export const omdbapi: any = axios.create({
  baseURL: "https://www.omdbapi.com/",
});

export const getMovies = async (
  movieName: string,
  page: number,
  movieType?: string,
  movieYear?: string
): Promise<MoviesSearchResult> => {
  try {
    const { data, status }: AxiosResponse<MoviesSearchResult> =
      await omdbapi.get(
        `?s=${movieName}&apikey=${API_KEY}&page=${page}${
          movieType ? `&type=${movieType}` : ""
        }${movieYear ? `&y=${movieYear}` : ""}`
      );
    if (status !== 200) {
      throw new Error(`Failed to fetch repository data: ${status}`);
    }
    return data;
  } catch (error: any) {
    console.log(error);

    return error;
  }
};

export const getMovieDetails = async (
  IMDb: string = ""
): Promise<MovieDetailsSearchResult> => {
  try {
    const { data, status }: AxiosResponse<MovieDetailsSearchResult> =
      await omdbapi.get(`?i=${IMDb}&apikey=${API_KEY}`);
    if (status !== 200) {
      throw new Error(`Failed to fetch repository data: ${status}`);
    }
    return data;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};
