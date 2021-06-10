// import App from 'next/app'
import Layout from "../src/components/Layout";
import { GlobalProvider } from "../src/context/GlobalContext";
import {useEffect} from 'react'
import "../src/assets/fonts/fontawesome-5/webfonts/fa-brands-400.ttf";
import "../src/assets/fonts/fontawesome-5/webfonts/fa-regular-400.ttf";
import "../src/assets/fonts/fontawesome-5/webfonts/fa-solid-900.ttf";

import "../src/assets/fonts/icon-font/fonts/avasta.ttf";
import "../src/assets/fonts/icon-font/css/style.css";

import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "../node_modules/aos/dist/aos.css";

import "../src/assets/fonts/icon-font/css/style.css";
import "../src/assets/fonts/fontawesome-5/css/all.css";

import "../src/scss/bootstrap.scss";
import "../src/scss/main.scss";
import * as ga from '../lib/ga'
 
const MyApp = ({ Component, pageProps, router }) => {

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  if (router.pathname.match(/404/)) {
    return (
      <GlobalProvider>
        <Layout pageContext={{ layout: "bare" }}>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
    );
  }
  if (router.pathname.match(/dashboard/)) {
    return (
      <GlobalProvider>
        <Layout pageContext={{ layout: "dashboard" }}>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
    );
  }

  return (
    <GlobalProvider>
      <Layout pageContext={{}}>
        <Component {...pageProps}/>
      </Layout>
    </GlobalProvider>
  );
};



export default MyApp;
