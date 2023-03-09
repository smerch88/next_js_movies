import Head from "next/head";

import { Container } from "@mui/material";

import MoviesList from "@/components/MoviesList/MoviesList";
import SearchForm from "@/components/SearchForm";
import { ReposPagination } from "@/components/Pagination";

const Movies = () => {
  return (
    <>
      <Head>
        <title>Movies</title>
      </Head>
      <Container>
        <SearchForm />
        <MoviesList />
        <ReposPagination />
      </Container>
    </>
  );
};

export default Movies;
