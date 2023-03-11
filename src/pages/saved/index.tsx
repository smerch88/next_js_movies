import Head from "next/head";

import { Container } from "@mui/material";

import Saved from "@/components/Saved";

const Movies = () => {
  return (
    <>
      <Head>
        <title>Saved</title>
      </Head>
      <Container>
        <Saved />
      </Container>
    </>
  );
};

export default Movies;
