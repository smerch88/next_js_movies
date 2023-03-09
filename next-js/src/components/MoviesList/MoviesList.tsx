import { getMovies } from "@/redux/movies/movies-selectors";

import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MoviesList = () => {
  const movies = useSelector(getMovies);
  const { Search, totalResults } = movies;

  return (
    <>
      {Search && (
        <Typography variant="h4" component="h2">
          List of movies: {totalResults} in total.
        </Typography>
      )}
      <Grid container spacing={2}>
        {Search &&
          Search.map((movie: Movie) => (
            <Grid item key={movie.imdbID} xs={12} sm={6} md={4}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default MoviesList;
