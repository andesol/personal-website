import Head from "next/head";
import { Global } from "@emotion/core";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Container } from "theme-ui";

function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width-device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <link
          rel="preload"
          href="/fonts/merriweather-regular.woff2"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Global
        styles={theme => ({
          "#__next": {
            display: "flex",
            flexDirection: "column",
            height: "100vh",
          },

          footer: {
            marginTop: "auto",
          },

          ul: {
            margin: 0,
            padding: 0,
          },

          li: {
            listStyle: "none",
          },
          a: {
            color: "inherit",
            textDecoration: "none",
            cursor: "pointer",
          },
          "a:focus": {
            border: "2px dotted orange",
          },
          "button:focus": {
            border: "2px dotted orange",
          },
        })}
      />

      <Container variant="mainContainer">
        <Header title="andesol" />
        <section className="layout">
          <div className="content">{children}</div>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
