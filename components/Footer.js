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
      <Flex sx={{ alignItems: "center", margin: "auto" }}>
        <span>&copy; {CURRENT_YEAR} andesol 🌿</span>
        <nav sx={{ color: "black" }}>
          <Flex>
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
              <Link
                sx={{
                  "&:hover": {
                    span: {
                      visibility: "visible",
                      display: "inline-block",
                    },
                  },
                }}
                variant="underlined"
                href="mailto:andesol@protonmail.com"
              >
                Contact
                <span
                  sx={{
                    visibility: "hidden",
                    width: "120px",
                    backgroundColor: "background",
                    color: "text",
                    textAlign: "center",
                    padding: 2,
                    borderRadius: "6px",
                    width: "220px",
                    bottom: "0",
                    left: "105%",
                    position: "absolute",
                    zIndex: 1,
                    boxShadow: "post",
                  }}
                >
                  Wow! Somebody got here. I don't have a contact form, but click
                  and send an email!
                </span>
              </Link>
            </li>
          </Flex>
        </nav>
      </Flex>
    </footer>
  );
}

export default Footer;
