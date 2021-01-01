/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useEffect, useRef } from "react";
import { jsx, Flex, NavLink, Heading, MenuButton } from "theme-ui";
import Link from "next/link";
import IconGithub from "@components/IconGithub";
import gsap from "gsap";

let toggleNav;
let toggleNavItems;

function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const nav = ref.current.querySelector("nav");

    console.log(nav);

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

    console.log(window.innerWidth);

    if (window.innerWidth >= 980) {
      toggleNav.seek(0.4);
      toggleNavItems.seek(0.4);
    }
  }, [ref]);

  function handleClick(event) {
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
        padding: "1.5rem 1rem calc(1.5rem + 9px) 2rem",
        position: "relative",
      }}
      ref={ref}
    >
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: ["100%", "100%", "auto"],
        }}
      >
        <a href="/" rel="home">
          andesol
        </a>
        <MenuButton
          sx={{
            display: ["block", "block", "none"],
          }}
          onClick={handleClick}
        />
      </div>
      <Flex
        as="nav"
        sx={{
          flexDirection: ["column", "column", "row"],
        }}
      >
        <NavLink href="/library">Resources</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="https://github.com/andesol">
          <IconGithub />
        </NavLink>
      </Flex>
    </Flex>
  );
}

export default Header;
