import { getMovieDetails } from "@/redux/movies/movies-selectors";
import Image from "next/image";
import { useSelector } from "react-redux";

import {
  Box,
  Typography,
  List,
  ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled, useTheme } from "@mui/material/styles";

const StyledImageBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "1rem",
  paddingTop: "1rem",
});

const MovieDetails = () => {
  const theme = useTheme();
  const movie = useSelector(getMovieDetails);
  const {
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    Ratings,
    Metascore,
    imdbRating,
    imdbVotes,
    imdbID,
    Type,
    DVD,
    BoxOffice,
    Production,
    Website,
  } = movie;

  const blurDataURL =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAANklEQVR42u3OQQ0AAAgEIE1u9DOFmw9IQFcy9VgLCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgreWIhkY7Ee+tVyAAAAAElFTkSuQmCC";

  const accordions = [
    {
      id: 4,
      name: "Released",
      value: Released,
    },

    {
      id: 7,
      name: "Director",
      value: Director,
    },
    {
      id: 8,
      name: "Writer",
      value: Writer,
    },
    {
      id: 9,
      name: "Actors",
      value: Actors,
    },

    {
      id: 11,
      name: "Language",
      value: Language,
    },
    {
      id: 12,
      name: "Country",
      value: Country,
    },
    {
      id: 13,
      name: "Awards",
      value: Awards,
    },
    {
      id: 15,
      name: "Metascore",
      value: Metascore,
    },

    {
      id: 19,
      name: "Type",
      value: Type,
    },
    {
      id: 20,
      name: "DVD",
      value: DVD,
    },
    {
      id: 21,
      name: "BoxOffice",
      value: BoxOffice,
    },
    {
      id: 22,
      name: "Production",
      value: Production,
    },
    {
      id: 23,
      name: "Website",
      value: Website,
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: `url(${Poster})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          backdropFilter: "blur(15px)",
          backgroundColor: `rgba(255, 255, 255, 0.7)`,
        }}
        pb={2}
      >
        <Box
          sx={{
            margin: "auto",
            maxWidth: "600px",
            padding: "20px",
            backgroundColor: theme.palette.background.default,
          }}
        >
          <Typography variant="h4" gutterBottom>
            {Title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {Year} | {Rated} | {Runtime}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {Genre}
          </Typography>
          {Poster !== "N/A" ? (
            <StyledImageBox>
              <Image
                src={Poster}
                width={200}
                height={300}
                alt="cinema"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </StyledImageBox>
          ) : null}
          <Typography variant="body1" gutterBottom>
            {Plot}
          </Typography>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Ratings</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List sx={{ marginBottom: "1rem" }}>
                {Ratings &&
                  Ratings.map((rating) => (
                    <ListItem key={rating.Source}>
                      <Typography variant="subtitle2" component="span">
                        {rating.Source}:{" "}
                      </Typography>
                      <Typography variant="body2" component="span">
                        {rating.Value}
                      </Typography>
                    </ListItem>
                  ))}
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>IMDB</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle2" gutterBottom>
                imdbRating: {imdbRating}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                imdbVotes: {imdbVotes}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                imdbID: {imdbID}
              </Typography>
            </AccordionDetails>
          </Accordion>
          {accordions &&
            accordions.map((item) => {
              if (item.value !== "N/A" && item.value) {
                return (
                  <Accordion key={item.id}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel${item.id}-content`}
                      id={`panel${item.id}-header`}
                    >
                      <Typography>{item.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{item.value}</Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              } else {
                return null;
              }
            })}
        </Box>
      </Box>
    </Box>
  );
};

export default MovieDetails;
