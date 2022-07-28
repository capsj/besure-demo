import App from 'next/app';

import '../styles/globals.css';
import '../styles/Home.module.css';
import '../pages/index.css';
import '../pages/quote/quote.css';
import '../app/components/layout/Footer.css';
import '../app/components/layout/Layout.css';

import Layout from "../app/components/layout/Layout";
import Meta from "../app/components/Meta";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
        <Layout>
            <Meta pageTitle="BeSure" description="BeSure website" key="besure" imageUrl='./logo-1.jpg'/>
            <Component {...pageProps} />
        </Layout>
    )
  }
}
