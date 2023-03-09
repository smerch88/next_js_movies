import { useFormik } from "formik";
import * as yup from "yup";
import { FC } from "react";

import { Button, TextField, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { fetchGetMovies } from "@/redux/movies/movies-operations";
import { setPage, setQuery } from "@/redux/movies/movies-slice";

const validationSchema = yup.object({
  movieName: yup.string().required("movieName is required"),
});

const SearchForm: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik<FormValues>({
    initialValues: {
      movieName: "Shrek",
    },
    validationSchema: validationSchema,
    onSubmit: (values: FormValues) => {
      dispatch(setPage(1));
      dispatch(setQuery(values.movieName));
      dispatch(fetchGetMovies({ movieName: values.movieName, page: 1 }));
    },
  });

  return (
    <div>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          gap: 1,
        }}
      >
        <TextField
          fullWidth
          id="movieName"
          name="movieName"
          label="movieName"
          value={formik.values.movieName}
          onChange={formik.handleChange}
          error={formik.touched.movieName && Boolean(formik.errors.movieName)}
          helperText={formik.touched.movieName && formik.errors.movieName}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default SearchForm;
