import { useEffect } from "react";
import Seo from "@components/Head";
import GlobalStyles from "@components/GlobalStyles";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Container } from "theme-ui";
import Prism from "prismjs";

function Layout({ children, pageTitle, page, ...props }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  return (
    <>
      <Seo pageTitle={pageTitle} />
      {/* <GlobalStyles /> */}
      <Container variant="mainContainer">
        <Header title="andesol" page={page} />
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
