import MovieDetails from "@/components/MovieDetails";
import Head from "next/head";

import { Container } from "@mui/material";

const Movie = () => (
  <>
    <Head>
      <title>Movie</title>
    </Head>

    <Container>
      <MovieDetails />
    </Container>
  </>
);

export default Movie;
