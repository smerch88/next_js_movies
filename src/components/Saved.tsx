import { getError, getFavourites } from "@/redux/movies/movies-selectors";

import Typography from "@mui/material/Typography";
import { Grid, Alert } from "@mui/material";

import { useSelector } from "react-redux";
import MovieCard from "./MoviesList/MovieCard";

const Saved = () => {
  const Search = useSelector(getFavourites);
  const error = useSelector(getError);
  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}
      {Search && (
        <Typography variant="h4" component="h2">
          List of saved: {Search.length} in total.
        </Typography>
      )}
      <Grid container spacing={2} mb={2}>
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

export default Saved;
