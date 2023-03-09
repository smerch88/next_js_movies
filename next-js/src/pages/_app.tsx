import type { AppProps } from "next/app";
import Layout from "@/components/Layout";

import { theme } from "@/styles/theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </>
);

export default App;
