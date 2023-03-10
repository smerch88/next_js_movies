import type { AppProps } from "next/app";
import Layout from "@/components/Layout";

import { useState } from "react";

import "@fontsource/roboto";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "@/styles/theme/theme";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store";

const App = ({ Component, pageProps }: AppProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    typeof localStorage !== "undefined"
      ? JSON.parse(localStorage.getItem("isDarkTheme") ?? "false")
      : false
  );

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("isDarkTheme", JSON.stringify(newTheme));
  };

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <CssBaseline />
            <Layout toggleTheme={toggleTheme}>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
