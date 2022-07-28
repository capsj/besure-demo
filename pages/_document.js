import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getStaticProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es"> {/* this should be changed when we support multi-lang.*/}
        <Head>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/logo.jpg" />

            <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />
            <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'/>
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
