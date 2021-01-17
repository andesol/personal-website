/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useEffect, useRef } from "react";
import { jsx, Flex, MenuButton, Link } from "theme-ui";

import IconGithub from "@components/IconGithub";
import Logo from "@components/Logo";
import RouteLink from "@components/RouteLink";

import gsap from "gsap";

let toggleNav;
let toggleNavItems;

function Header({ page }) {
  console.log(page);
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const nav = ref.current;

    gsap.set(nav, { height: "auto" });
    gsap.set(nav.querySelectorAll("a"), { opacity: 1 });

    toggleNav = gsap.from(nav, {
      height: 0,
      paused: true,
      duration: 0.4,
      ease: "power1",
    });

    toggleNavItems = gsap.from(nav.querySelectorAll("a"), {
      left: "10rem",
      opacity: 0,
      paused: true,
      duration: 0.4,
      ease: "power1",
      stagger: 0.01,
    });

    if (window.innerWidth >= 980) {
      toggleNav.seek(0.4);
      toggleNavItems.seek(0.4);
    }
  }, [ref]);

  function handleMenu(event) {
    event.preventDefault();
    if (open) {
      toggleNav.reverse();
      toggleNavItems.reverse();
    } else {
      toggleNav.play();
      toggleNavItems.play();
    }
    setOpen(!open);
  }

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

        <Link variant="nav" href="https://github.com/andesol" target="_blank">
          <IconGithub />
        </Link>
      </Flex>
    </Flex>
  );
}

export default Header;
