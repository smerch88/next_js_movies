import { getMovies } from "@/services/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGetMovies = createAsyncThunk(
  "movies/getMovies",
  async (movieName: string, thunkApi) => {
    try {
      const res = await getMovies(movieName);
      // if (res.code === "ERR_BAD_REQUEST") {
      //   throw new Error(
      //     `Failed to fetch data, status code: ${res.response.data.message}`
      //   );
      // }
      return res;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
