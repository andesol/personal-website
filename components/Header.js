/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useRef, useLayoutEffect } from "react";
import { jsx, Flex, MenuButton, Link, Container } from "theme-ui";

import { Logo } from "@components/icons";
import RouteLink from "@components/RouteLink";

import useHamburgerMenu from "../hooks/useHamburgerMenu";

function Header({ page }) {
  const ref = useRef();

  // const [windowWidth, setWindowWidth] = useState();

  // useLayoutEffect(() => {
  //   setWindowWidth(window.innerWidth);
  //   window.addEventListener("resize", () => {
  //     setWindowWidth(window.innerWidth);
  //   });
  // }, []);

  const { handleMenu } = useHamburgerMenu(ref);

  // TODO: generalise
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
    now: {
      label: "Home",
      url: "/",
    },
  };

  const pageDependentLabel = pageDependentNavItem[page].label;
  const pageDependentUrl = pageDependentNavItem[page].url;

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
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Flex
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            width: ["100%", "100%", "auto"],
          }}
        >
          <Flex
            sx={{
              alignItems: "center",
            }}
          >
            <RouteLink href="/" aria-label="andesol home">
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
              width: "35px",
              height: "35px",
              "&>svg": {
                width: "35px",
                height: "35px",
              },
            }}
            onClick={handleMenu}
          />
        </Flex>

        <Flex
          as="nav"
          sx={{
            flexDirection: ["column", "column", "row"],
            "&>*": {
              padding: [2, 2, 0],
            },
          }}
          ref={ref}
        >
          <RouteLink variant="nav" href={pageDependentUrl || "/"}>
            {pageDependentLabel || "Home"}
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
