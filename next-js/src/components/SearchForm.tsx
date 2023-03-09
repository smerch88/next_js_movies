import { useFormik } from "formik";
import * as yup from "yup";
import { FC, useState } from "react";

import { useTheme } from "@mui/material";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  CircularProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { fetchGetMovies } from "@/redux/movies/movies-operations";
import {
  setPage,
  setQuery,
  setType,
  setYear,
} from "@/redux/movies/movies-slice";
import {
  getQuery,
  getYear,
  getType,
  getIsLoading,
} from "@/redux/movies/movies-selectors";

const validationSchema = yup.object({
  movieName: yup.string().required("movieName is required"),
  movieType: yup.string(),
  movieYear: yup.string(),
});

const SearchForm: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();

  const isLoading = useSelector(getIsLoading);
  const query = useSelector(getQuery);
  const type = useSelector(getType);
  const year = useSelector(getYear);

  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);

  const formik = useFormik<FormValues>({
    initialValues: {
      movieName: query,
      movieType: type,
      movieYear: year,
    },
    validationSchema: validationSchema,
    onSubmit: (values: FormValues) => {
      dispatch(setPage(1));
      dispatch(setQuery(values.movieName));
      dispatch(setType(values.movieType));
      dispatch(setYear(values.movieYear));
      dispatch(
        fetchGetMovies({
          movieName: values.movieName,
          page: 1,
          movieType: values.movieType,
          movieYear: values.movieYear,
        })
      );
    },
  });

  const menuItemsOrder = [
    { value: "", text: "any" },
    { value: "movie", text: "movie" },
    { value: "series", text: "series" },
    { value: "episode", text: "episode" },
  ];

  const handleToggleAdvancedOptions = () => {
    setShowAdvancedOptions(!showAdvancedOptions);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          gap: 1,
          paddingTop: theme.spacing(2),
        }}
      >
        <TextField
          sx={{ marginBottom: theme.spacing(2) }}
          fullWidth
          id="movieName"
          name="movieName"
          label="movieName"
          value={formik.values.movieName}
          onChange={formik.handleChange}
          error={formik.touched.movieName && Boolean(formik.errors.movieName)}
          helperText={formik.touched.movieName && formik.errors.movieName}
        />
        <Button
          fullWidth
          variant="contained"
          onClick={handleToggleAdvancedOptions}
          sx={{ marginBottom: theme.spacing(2) }}
        >
          {showAdvancedOptions
            ? "Hide advanced options"
            : "Show advanced options"}
        </Button>
        {showAdvancedOptions && (
          <FormControl fullWidth sx={{ marginBottom: theme.spacing(2) }}>
            <InputLabel id="sort-label">movieType</InputLabel>
            <Select
              label="movieType"
              labelId="movieType"
              id="movieType"
              name="movieType"
              value={formik.values.movieType}
              onChange={formik.handleChange}
              error={
                formik.touched.movieType && Boolean(formik.errors.movieType)
              }
            >
              {menuItemsOrder.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        {showAdvancedOptions && (
          <TextField
            sx={{ marginBottom: theme.spacing(2) }}
            fullWidth
            id="movieYear"
            name="movieYear"
            label="movieYear"
            value={formik.values.movieYear}
            onChange={formik.handleChange}
            error={formik.touched.movieYear && Boolean(formik.errors.movieYear)}
            helperText={formik.touched.movieYear && formik.errors.movieYear}
          />
        )}
        <Button
          fullWidth
          sx={{ marginBottom: theme.spacing(1) }}
          variant="contained"
          color="primary"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? <CircularProgress size={24} /> : "Search"}
        </Button>
      </Box>
    </>
  );
};

export default SearchForm;
