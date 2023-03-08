import axios, { AxiosResponse } from "axios";

const API_KEY: string = "19759c28";

export const omdbapi: any = axios.create({
  baseURL: "http://www.omdbapi.com/",
});

export const getMovies = async (movieName: any = "shrek"): Promise<any> => {
  try {
    const { data }: AxiosResponse<any> = await omdbapi.get(
      `?s=${movieName}&apikey=${API_KEY}`
    );
    console.log(data);
    return data;
  } catch (error: any) {
    return error;
  }
};
