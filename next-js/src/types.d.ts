interface Movie {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
}

interface MoviesState {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
}
