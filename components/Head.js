import Head from "next/head";

function Seo({ pageTitle }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content="software development, web development, javascript"
      />
      <meta
        name="description"
        content="andesol, web developer with an interest in the Javascript ecosystem "
      />
      <title>{pageTitle}</title>
      <link
        rel="preload"
        href="/fonts/CrimsonPro-Bold.woff2"
        as="font"
        crossOrigin=""
      />
    </Head>
  );
}

export default Seo;
