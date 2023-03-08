import type { AppProps } from "next/app";
import Layout from "@/components/Layout";

import { theme } from "@/styles/theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </>
);

export default App;
