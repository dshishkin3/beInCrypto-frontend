import Layout from "../app/components/ui/layout/Layout";

import type { AppProps } from "next/app";

import "../app/assets/styles/globals.css";
import "../app/assets/styles/_spacing.css";
import "../app/assets/styles/_colors.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
