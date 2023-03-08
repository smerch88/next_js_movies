import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Error = () => {
  const router = useRouter();
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
    setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);
  }, [router, seconds]);

  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h1">404</Typography>
          <Typography>Something went wrong...</Typography>
          <Typography>Redirecting in {seconds} seconds</Typography>
        </Box>
      </Container>
    </>
  );
};

export default Error;
