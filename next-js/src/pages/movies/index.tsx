import Head from "next/head";

import { useDispatch } from "react-redux";

import { Container } from "@mui/material";
import { fetchGetMovies } from "@/redux/movies/movies-operations";
import { AppDispatch } from "@/redux/store";

import MoviesList from "@/components/MoviesList/MoviesList";
import SearchForm from "@/components/SearchForm";

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
        <SearchForm />
        <MoviesList />
      </Container>
    </>
  );
};

export default Movies;
