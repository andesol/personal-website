import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

let toggleNav;
let toggleNavItems;

export default function useHamburgerMenu(ref) {
  const [open, setOpen] = useState(false);

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

  return {
    handleMenu,
  };
}
