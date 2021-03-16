/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "theme-ui";

function Footer() {
  return (
    <footer
      sx={{
        display: "grid",
        placeItems: "center",
        minHeight: "5rem",
        backgroundColor: "secondary",
      }}
    >
      2020 - andesol
    </footer>
  );
}

export default Footer;
