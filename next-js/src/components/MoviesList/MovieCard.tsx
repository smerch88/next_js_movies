import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { fetchGetMovieDetails } from "@/redux/movies/movies-operations";
import { useRouter } from "next/router";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const { Title, Poster, Type, Year, imdbID } = movie;

  const onClickHandler = () => {
    dispatch(fetchGetMovieDetails(imdbID));
    router.push(`/movies/${imdbID}`);
  };

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={Poster} alt="poster" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Title: {Title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Type: {Type}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Year: {Year}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={onClickHandler}>
            Details
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default MovieCard;
