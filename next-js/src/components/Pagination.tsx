import { useState, useEffect } from "react";
import { Box, Pagination, useMediaQuery, useTheme } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import {
  getMovies,
  getPage,
  getQuery,
  getType,
  getYear,
} from "@/redux/movies/movies-selectors";
import { fetchGetMovies } from "@/redux/movies/movies-operations";
import { AppDispatch } from "@/redux/store";
import { setPage } from "@/redux/movies/movies-slice";

export const ReposPagination = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();

  const page = useSelector(getPage);
  const [currentPage, setCurrentPage] = useState(page);
  const [numberOfPages, setNumberOfPages] = useState(0);

  const movies = useSelector(getMovies);
  const query = useSelector(getQuery);
  const type = useSelector(getType);
  const year = useSelector(getYear);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setCurrentPage(page);
    if (movies) {
      const { totalResults } = movies;
      setNumberOfPages(Math.ceil(parseInt(totalResults) / 10));
    }
  }, [movies, page]);

  const handlePageChange = (event: any, value: number) => {
    setCurrentPage(value);
    dispatch(setPage(value));
    dispatch(
      fetchGetMovies({
        movieName: query,
        page: value,
        movieYear: year,
        movieType: type,
      })
    );
  };

  return (
    <>
      {numberOfPages > 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
          }}
        >
          <Pagination
            count={numberOfPages}
            variant="outlined"
            onChange={handlePageChange}
            page={currentPage}
            siblingCount={isMobile ? 0 : 1}
          />
        </Box>
      )}
    </>
  );
};
