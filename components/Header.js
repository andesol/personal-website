/** @jsxRuntime classic */
/** @jsx jsx */
import { useRef } from "react";
import { jsx, Flex, MenuButton, Link, Container } from "theme-ui";

import { Logo } from "@components/icons";
import RouteLink from "@components/RouteLink";

import useHamburgerMenu from "../hooks/useHamburgerMenu";

function Header({ page }) {
  let headerTheme = {};

  const ref = useRef();

  const { handleMenu } = useHamburgerMenu(ref);

  let pageDependentNavItem = {
    home: "Articles",
    blog: "Home",
    article: "Index",
  };

  return (
    <header
      sx={{
        width: "100%",
        backgroundColor: headerTheme.background,
        paddingTop: 3,
        paddingBottom: 3,
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
                }}
              />
            </RouteLink>
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
          <RouteLink variant="nav" href="/blog">
            {pageDependentNavItem[page]}
          </RouteLink>

          <Link
            variant="nav"
            href="https://github.com/andesol"
            target="_blank"
            rel="noopener noreferer"
          >
            Github
          </Link>
        </Flex>
      </Container>
    </header>
  );
}

export default Header;
