/** @jsxRuntime classic */
/** @jsx jsx */
import { useRef } from "react";
import { jsx, Flex, MenuButton, Link } from "theme-ui";

import IconGithub from "@components/IconGithub";
import Logo from "@components/Logo";
import RouteLink from "@components/RouteLink";

import useHamburgerMenu from "../hooks/useHamburgerMenu";

function Header({ page }) {
  const ref = useRef();

  const { handleMenu } = useHamburgerMenu(ref);

  let pageDependentNavItem;
  if (page === "home") {
    pageDependentNavItem = (
      <RouteLink variant="nav" href="/blog">
        Notes
      </RouteLink>
    );
  } else if (page === "blog") {
    pageDependentNavItem = (
      <RouteLink variant="nav" href="/">
        Home
      </RouteLink>
    );
  } else if (page === "article") {
    pageDependentNavItem = (
      <RouteLink variant="nav" href="/blog">
        Index of notes
      </RouteLink>
    );
  }

  return (
    <Flex
      as="header"
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: ["column", "column", "row"],
        gap: "1rem",
        justifyContent: "space-between",
        overflow: "hidden",
        padding: "1.5rem 0rem calc(1.5rem + 9px) 0rem",
        position: "relative",
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
          <RouteLink href="/">
            <div>
              <Logo
                sx={{
                  display: "inline-block",
                  verticalAlign: "middle",
                }}
              />
            </div>
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
          aria-labe="Link to Github"
          variant="nav"
          href="https://github.com/andesol"
          target="_blank"
          sx={{
            ":hover > svg": {
              fill: "primary",
            },
          }}
        >
          <IconGithub />
        </Link>
      </Flex>
    </Flex>
  );
}

export default Header;
