/** @jsxRuntime classic */
/** @jsx jsx */
import { useRef } from "react";
import { jsx, Flex, MenuButton, Link, Container } from "theme-ui";

import { Logo, IconGithub } from "@components/icons";
import RouteLink from "@components/RouteLink";

import useHamburgerMenu from "../hooks/useHamburgerMenu";

function Header({ page }) {
  let headerTheme = {};

  if (page === "home") {
    headerTheme.background = "pale";
  } else {
    headerTheme.background = "white";
  }

  const ref = useRef();

  const { handleMenu } = useHamburgerMenu(ref);

  let pageDependentNavItem;
  if (page === "home") {
    pageDependentNavItem = (
      <RouteLink sx={{ color: "fakeBlack" }} variant="nav" href="/blog">
        Articles
      </RouteLink>
    );
  } else if (page === "blog") {
    pageDependentNavItem = (
      <RouteLink sx={{ color: "fakeBlack" }} variant="nav" href="/">
        Home
      </RouteLink>
    );
  } else if (page === "article") {
    pageDependentNavItem = (
      <RouteLink sx={{ color: "fakeBlack" }} variant="nav" href="/blog">
        Index
      </RouteLink>
    );
  }

  return (
    <header
      sx={{
        width: "100%",
        backgroundColor: headerTheme.background,
        paddingTop: 3,
        color: "white",
      }}
    >
      <Container
        variant="mainContainer"
        sx={{
          flexDirection: ["column", "column", "row"],
          overflow: "hidden",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Flex
          sx={{
            justifyContent: "space-between",
            width: ["100%", "100%", "auto"],
          }}
        >
          <Flex
            sx={{
              alignItems: "center",
            }}
          >
            <RouteLink href="/" aria-label="andesol home" aria>
              <Logo
                sx={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  fill: headerTheme.color,
                }}
              />
            </RouteLink>
            {page === "blog" && (
              <div
                sx={{
                  marginLeft: 4,
                  textTransform: "uppercase",
                  fontWeight: "400",
                  fontSize: 3,
                  color: "#201c1c",
                  letterSpacing: ".15rem",
                }}
              >
                / Notes
              </div>
            )}
          </Flex>
          <MenuButton
            sx={{
              display: ["block", "block", "none"],
            }}
            onClick={handleMenu}
          />
        </Flex>
        <Flex
          as="nav"
          sx={{
            flexDirection: ["column", "column", "row"],
          }}
          ref={ref}
        >
          {pageDependentNavItem}

          <Link
            aria-label="Link to Github"
            variant="nav"
            href="https://github.com/andesol"
            target="_blank"
            sx={{
              fill: "fakeBlack",
              ":hover > svg": {
                fill: "accent",
              },
            }}
          >
            <IconGithub />
          </Link>
        </Flex>
      </Container>
    </header>
  );
}

export default Header;
