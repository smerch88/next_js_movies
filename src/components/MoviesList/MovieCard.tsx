import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { fetchGetMovieDetails } from "@/redux/movies/movies-operations";
import { useRouter } from "next/router";
import { useState } from "react";
import { getFavourites } from "@/redux/movies/movies-selectors";
import {
  addToFavorites,
  removeFromFavorites,
} from "@/redux/movies/movies-slice";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [isCardClicked, setIsCardClicked] = useState(true);

  const { Title, Poster, Type, Year, imdbID } = movie;

  const favList = useSelector(getFavourites);

  const image404 =
    "https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=740&t=st=1678459439~exp=1678460039~hmac=9aebc1706c1f7becefe5772d0ed7525fdcce17dc865963ce292d0b912d382034";

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

  const isInFavorites = () => {
    return favList.some((favorite: Movie) => favorite.imdbID === imdbID);
  };

  const handleFavoriteClick = () => {
    if (isInFavorites()) {
      dispatch(removeFromFavorites(movie));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardActionArea onClick={handleCardClick}>
          <CardMedia
            component="img"
            height="500"
            image={Poster !== "N/A" ? Poster : image404}
            alt="poster"
          />
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
          {isInFavorites() ? (
            <StarIcon color="secondary" onClick={handleFavoriteClick} />
          ) : (
            <StarBorderIcon color="secondary" onClick={handleFavoriteClick} />
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default MovieCard;
