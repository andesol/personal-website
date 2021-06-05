/** @jsxRuntime classic */
/** @jsx jsx */
import { useRef } from "react";
import { jsx, Flex, MenuButton, Link, Container } from "theme-ui";

import { Logo } from "@components/icons";
import RouteLink from "@components/RouteLink";

import useHamburgerMenu from "../hooks/useHamburgerMenu";

function Header({ page }) {
  const ref = useRef();

  const { handleMenu } = useHamburgerMenu(ref);

  let pageDependentNavItem = {
    home: {
      label: "Articles",
      url: "/blog",
    },
    blog: {
      label: "Home",
      url: "/",
    },
    article: {
      label: "Index",
      url: "/blog",
    },
  };

  return (
    <header
      sx={{
        height: "100%",
        paddingTop: 3,
        paddingBottom: 3,
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
          <RouteLink variant="nav" href={pageDependentNavItem[page].url}>
            {pageDependentNavItem[page].label}
          </RouteLink>

          <Link
            href="https://github.com/andesol"
            target="_blank"
            rel="noopener noreferer"
            variant="nav"
          >
            Github
          </Link>
        </Flex>
      </Container>
    </header>
  );
}

export default Header;
