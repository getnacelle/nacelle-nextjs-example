import App from 'next/app';
import React from 'react';
import { Layout } from 'components';
import $nacelle from 'services/nacelle.js';
import '../styles/globals.css';

function MyApp({ Component, pageProps, space }) {
  return (
    <Layout space={space}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const space = await $nacelle.data.space();
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, space };
};
