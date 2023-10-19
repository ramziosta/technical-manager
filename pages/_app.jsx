import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import "../styles/app.scss";
import "../styles/globals.scss";
import { DevSupport } from "@react-buddy/ide-toolbox-next";
import { ComponentPreviews, useInitial } from "@/dev";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <DevSupport
        ComponentPreviews={ComponentPreviews}
        useInitialHook={useInitial}
      >
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </DevSupport>
    </Layout>
  );
};

export default MyApp;
