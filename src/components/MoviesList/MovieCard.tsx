import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { fetchGetMovieDetails } from "@/redux/movies/movies-operations";
import { useRouter } from "next/router";
import { useState } from "react";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [isCardClicked, setIsCardClicked] = useState(true);

  const { Title, Poster, Type, Year, imdbID } = movie;

  const onClickHandler = () => {
    dispatch(fetchGetMovieDetails(imdbID));
    router.push(`/movies/details?imdbID=${imdbID}&Title=${Title}`);
  };

  const handleCardClick = () => {
    setIsCardClicked(!isCardClicked);
  };

  const typographyStyle = {
    textOverflow: isCardClicked ? "ellipsis" : "unset",
    whiteSpace: isCardClicked ? "nowrap" : "unset",
    overflow: isCardClicked ? "hidden" : "unset",
  };

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardActionArea onClick={handleCardClick}>
          <CardMedia component="img" height="500" image={Poster} alt="poster" />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={typographyStyle}
            >
              Title: {Title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={typographyStyle}
            >
              Type: {Type}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={typographyStyle}
            >
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
