import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

import notFound from "../../../public/notfound.webp";

const Movies = () => {
  const [movies, setMovies] = useState<Movie[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "http://www.omdbapi.com/?s=spiderman&apikey=19759c28"
      );
      setMovies(data.Response === "True" ? data.Search : null);
    };
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Movies</title>
      </Head>

      <h1>Movies List:</h1>

      <ul>
        {movies &&
          movies.map((movie) => (
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
