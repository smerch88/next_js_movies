import { getMovies } from "@/redux/movies/movies-selectors";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Button, CardActionArea, CardActions } from "@mui/material";

import { useSelector } from "react-redux";

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
              <Card sx={{ minWidth: 275 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={movie.Poster}
                    alt="poster"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Title: {movie.Title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Type: {movie.Type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Year: {movie.Year}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default MoviesList;
