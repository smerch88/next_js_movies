import axios, { AxiosResponse } from "axios";

const API_KEY: string = "19759c28";

export const omdbapi: any = axios.create({
  baseURL: "https://www.omdbapi.com/",
});

export const getMovies = async (
  movieName: string,
  page: number,
  movieType?: string,
  movieYear?: string
): Promise<any> => {
  try {
    const { data }: AxiosResponse<any> = await omdbapi.get(
      `?s=${movieName}&apikey=${API_KEY}&page=${page}${
        movieType ? `&type=${movieType}` : ""
      }${movieYear ? `&y=${movieYear}` : ""}`
    );
    return data;
  } catch (error: any) {
    return error;
  }
};

export const getMovieDetails = async (IMDb: string = ""): Promise<any> => {
  try {
    const { data }: AxiosResponse<any> = await omdbapi.get(
      `?i=${IMDb}&apikey=${API_KEY}`
    );
    return data;
  } catch (error: any) {
    return error;
  }
};
