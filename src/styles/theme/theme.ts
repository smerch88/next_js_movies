import { createTheme } from "@mui/material";
import { teal } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: teal[500],
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          @media screen and (min-width: 320px) {
            ::-webkit-scrollbar {
              width: 5px;
            }
            ::-webkit-scrollbar-track {
              background: rgba(255, 255, 255, 0.5);
            }
            ::-webkit-scrollbar-thumb {
              background-color: rgba(0, 0, 0, 0.5);
              border-radius: 5px;
            }
          }
        `,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: teal[500],
    },
  },
});
