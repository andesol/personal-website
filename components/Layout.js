import { useEffect } from "react";
import Seo from "@components/Head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Prism from "prismjs";

function Layout({ children, pageTitle, page }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  return (
    <>
      <Seo pageTitle={pageTitle} />
      <Header title="andesol" page={page} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
