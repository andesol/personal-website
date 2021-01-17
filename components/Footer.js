/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Flex, Heading } from "theme-ui";
import Form from "@components/Form";

function Footer() {
  return (
    <footer
      sx={{
        display: "grid",
        placeItems: "center",
        minHeight: "5rem",
      }}
    >
      2020 - andesol
    </footer>
  );
}

export default Footer;
