import { getMovieDetails } from "@/redux/movies/movies-selectors";
import { useSelector } from "react-redux";

const MovieDetails = () => {
  const movie = useSelector(getMovieDetails);
  const {
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    Ratings,
    Metascore,
    imdbRating,
    imdbVotes,
    imdbID,
    Type,
    DVD,
    BoxOffice,
    Production,
    Website,
    Response,
  } = movie;

  return (
    <>
      <p>{Title}</p>
      <p>{Year}</p>
      <p>{Rated}</p>
      <p>{Released}</p>
      <p>{Runtime}</p>
      <p>{Genre}</p>
      <p>{Director}</p>
      <p>{Writer}</p>
      <p>{Actors}</p>
      <p>{Plot}</p>
      <p>{Language}</p>
      <p>{Country}</p>
      <p>{Awards}</p>
    </>
  );
};

export default MovieDetails;
