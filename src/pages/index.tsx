import Head from "next/head";
import { Grid, Typography, Container } from "@mui/material";
import MovieCard from "@/components/MoviesList/MovieCard";

const MOVIE_TITLES = [
  "shrek",
  "back to the future",
  "avatar",
  "the godfather",
  "the shawshank redemption",
  "the dark knight",
  "pulp fiction",
  "forrest gump",
  "the matrix",
  "star wars",
];

export async function getServerSideProps() {
  const title = MOVIE_TITLES[Math.floor(Math.random() * MOVIE_TITLES.length)];
  const res = await fetch(
    `https://www.omdbapi.com/?s=${title}&apikey=19759c28&page=1&type=movie`
  );
  const data = await res.json();
  return { props: { data } };
}

const Home = ({ data }: { data: MoviesSearchResult }) => {
  const { Search } = data;

  const getGridSize = () => {
    if (window.innerWidth < 600) {
      return 4;
    } else if (window.innerWidth < 960) {
      return 4;
    } else {
      return 3;
    }
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Container>
        <Typography variant="h2" component="h1" mb={2}>
          Best Movies of all times
        </Typography>
        <Grid container spacing={2} mb={2}>
          {Search &&
            Search.slice(0, getGridSize()).map((movie: Movie) => (
              <Grid item key={movie.imdbID} xs={12} sm={6} md={4}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
