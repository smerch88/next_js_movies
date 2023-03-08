import Head from "next/head";

import { useDispatch } from "react-redux";

import { Button, Container } from "@mui/material";
import { fetchGetMovies } from "@/redux/movies/movies-operations";
import { AppDispatch } from "@/redux/store";
import MoviesList from "@/components/MoviesList/MoviesList";

const Movies = () => {
  const dispatch = useDispatch<AppDispatch>();

  const onClickHandler = () => {
    dispatch(fetchGetMovies("shrek"));
  };

  return (
    <>
      <Head>
        <title>Movies</title>
      </Head>
      <Container>
        <Button onClick={onClickHandler}>Search</Button>
        <MoviesList />
      </Container>
    </>
  );
};

export default Movies;
