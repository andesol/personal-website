import Seo from "@components/Head";
import GlobalStyles from "@components/GlobalStyles";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Container } from "theme-ui";

function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Seo pageTitle={pageTitle} />
      <GlobalStyles />
      <Container variant="mainContainer">
        <Header title="andesol" />
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
