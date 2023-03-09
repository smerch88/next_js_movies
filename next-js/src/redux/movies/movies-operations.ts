import { getMovies, getMovieDetails } from "@/services/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGetMovies = createAsyncThunk(
  "movies/getMovies",
  async (
    { movieName, page }: { movieName: string; page: number },
    thunkApi
  ) => {
    try {
      const res = await getMovies(movieName, page);
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
