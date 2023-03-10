import Image from "next/image";
import cinemaImg from "../../public/cinema.jpg";
import Head from "next/head";

import { Grid, Typography, Container } from "@mui/material";
import MovieCard from "@/components/MoviesList/MovieCard";

export async function getServerSideProps() {
  const res =
    await fetch(` https://www.omdbapi.com/?s=shrek&apikey=19759c28&page=1&type=movie
`);
  const data = await res.json();
  return { props: { data } };
}

const Home = ({ data }: { data: MoviesSearchResult }) => {
  const { Search } = data;
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Container>
        <Typography variant="h2" component="h1" mb={2}>
          Best Movies of all times
        </Typography>
        <Grid container spacing={2}>
          {Search &&
            Search.slice(0, 3).map((movie: Movie) => (
              <Grid item key={movie.imdbID} xs={12} sm={6} md={4}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
        </Grid>
        <Image
          src={cinemaImg}
          width={300}
          height={200}
          alt="cinema"
          placeholder="blur"
        />
      </Container>
    </>
  );
};

export default Home;
