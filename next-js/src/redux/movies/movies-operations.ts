import { getMovies, getMovieDetails } from "@/services/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGetMovies = createAsyncThunk(
  "movies/getMovies",
  async (
    {
      movieName,
      page,
      movieType,
      movieYear,
    }: {
      movieName: string;
      page: number;
      movieType?: string;
      movieYear?: string;
    },
    thunkApi
  ) => {
    try {
      const res = await getMovies(movieName, page, movieType, movieYear);
      return res;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchGetMovieDetails = createAsyncThunk(
  "movies/getMovieDetails",
  async (IMDb: string, thunkApi) => {
    try {
      const res = await getMovieDetails(IMDb);
      return res;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
