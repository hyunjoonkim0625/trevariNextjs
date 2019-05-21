import App, {
  Container,
  NextAppContext,
  AppProps,
  DefaultAppIProps
} from "next/app";
import { NextContext } from "next";
import Router from "next/router";
import React from "react";
import { Provider } from "mobx-react";
import "../index.scss";

// fontAwesomeIcons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Layout from "../Layout/Layout";
import RootStore, { initRootStore } from "../stores";

library.add(faBars);

Router.events.on("routeChangeComplete", () => {
  if (process.env.NODE_ENV !== "production") {
    const els: NodeListOf<HTMLLinkElement> = document.querySelectorAll(
      'link[href*="/_next/static/css/styles.chunk.css"]'
    );
    const timestamp = new Date().valueOf();
    els[0].href = "/_next/static/css/styles.chunk.css?v=" + timestamp;
  }
});

type CustomAppProps = AppProps & DefaultAppIProps;
type CustomNextAppContext = NextAppContext & {
  ctx: NextContext & {
    rootStore: RootStore;
  };
};

class MyApp extends App<CustomAppProps> {
  static async getInitialProps(context: CustomNextAppContext) {
    const { Component, ctx } = context;

    let pageProps = {};
    const rootStore = initRootStore();
    ctx.rootStore = rootStore;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  rootStore: RootStore;

  constructor(props: CustomAppProps) {
    super(props);
    this.rootStore = initRootStore();
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider {...this.rootStore}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
