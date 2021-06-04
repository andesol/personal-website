/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Flex, Link } from "theme-ui";
import RouteLink from "./RouteLink";

const CURRENT_YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer
      sx={{
        display: "flex",
        backgroundColor: "gray",
        padding: 4,
      }}
    >
      <Flex
        sx={{
          alignItems: "center",
          margin: "auto",
          flexDirection: ["column", "row", "row"],
        }}
      >
        <span>&copy; {CURRENT_YEAR} andesol 🌿</span>
        <nav sx={{ color: "black" }}>
          <Flex as="ul">
            <li>
              <RouteLink variant="underlined" href="/now">
                Now
              </RouteLink>
            </li>
            <li>
              <Link
                href="https://github.com/andesol"
                target="_blank"
                rel="noopener noreferer"
                variant="underlined"
              >
                Github
              </Link>
            </li>
            <li
              sx={{
                position: "relative",
              }}
            >
              <Link variant="underlined" href="mailto:andesol@protonmail.com">
                Contact
              </Link>
            </li>
          </Flex>
        </nav>
      </Flex>
    </footer>
  );
}

export default Footer;
