import Head from "next/head";
import Image from "next/image";

import notFound from "../../../public/notfound.webp";

import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "@/redux/movies/movies-selectors";

import { Button } from "@mui/material";
import { fetchGetMovies } from "@/redux/movies/movies-operations";
import { AppDispatch } from "@/redux/store";

const Movies = () => {
  const dispatch = useDispatch<AppDispatch>();

  const moviesList = useSelector(getMovies);
  const movies = moviesList.Search;
  console.log("movies", movies);

  const onClickHandler = () => {
    dispatch(fetchGetMovies());
  };

  return (
    <>
      <Head>
        <title>Movies</title>
      </Head>

      <Button onClick={onClickHandler}>Search</Button>

      <h1>Movies List:</h1>

      <ul>
        {movies &&
          movies.map((movie: any) => (
            <li key={movie.imdbID}>
              {movie.Poster && movie.Poster !== "N/A" ? (
                <Image
                  src={movie.Poster}
                  alt="poster"
                  width={200}
                  height={300}
                  loading="lazy"
                />
              ) : (
                <Image
                  src={notFound}
                  alt="poster"
                  width={200}
                  height={300}
                  loading="lazy"
                  placeholder="blur"
                />
              )}
              <br />
              <strong>{movie.Title}</strong>
              <p>{movie.Year}</p>
              <p>{movie.Type}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Movies;
