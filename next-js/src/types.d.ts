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

interface MoviesSearchResult {
  Search: {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }[];
  totalResults: string;
  Response: string;
}

interface MovieDetailsSearchResult {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

interface FormValues {
  movieName: string;
  movieType: string;
  movieYear: string;
}
