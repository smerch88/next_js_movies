import { useState, useEffect } from "react";
import { Box, Pagination, useMediaQuery, useTheme } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { getMovies, getQuery } from "@/redux/movies/movies-selectors";
import { fetchGetMovies } from "@/redux/movies/movies-operations";
import { AppDispatch } from "@/redux/store";

export const ReposPagination = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();

  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);

  const movies = useSelector(getMovies);
  const query = useSelector(getQuery);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (movies) {
      const { totalResults } = movies;
      setNumberOfPages(Math.ceil(parseInt(totalResults) / 10));
    }
  }, [movies]);

  const handlePageChange = (event: any, value: number) => {
    setCurrentPage(value);
    dispatch(fetchGetMovies({ movieName: query, page: value }));
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
