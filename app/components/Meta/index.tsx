import Head from 'next/head';

const Meta = ({pageTitle, description, imageUrl}) => {
  return (
    <Head>
      <meta charSet='utf-8'/>
      <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
      <meta name='viewport'
            content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5'/>
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content="@makerArg" key="twhandle" />

      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name='keywords' content='Keywords'/>
      <meta property="og:site_name" content="iZAP" key="ogsitename" />
      <meta property="og:title" content={pageTitle} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta property="og:image" content={imageUrl} key="ogimage" />
      <meta name="theme-color" content="#1890ff"/>
    </Head>
  );
};

export default Meta;
