import axios, { AxiosResponse } from "axios";

const API_KEY: string = "19759c28";

export const omdbapi: any = axios.create({
  baseURL: "http://www.omdbapi.com/",
});

export const getMovies = async (
  movieName: string,
  page: number = 1
): Promise<any> => {
  try {
    const { data }: AxiosResponse<any> = await omdbapi.get(
      `?s=${movieName}&apikey=${API_KEY}&page=${page}`
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
