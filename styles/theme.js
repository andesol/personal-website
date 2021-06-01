export default {
  breakpoints: ["40em", "56em", "64em"],
  borders: {
    decoration: "10px solid orange",
  },
  colors: {
    text: "#000",
    background: "#fff",
    fakeBlack: "#161616",
    pale: "#F9ECCC",
    contrast: "#5386E4",
    accent: "#D52941",
    muted: "dimgray",
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "Crimson Pro, serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold",
    },
    input: {
      borderColor: "gray",
      backgroundColor: "#FFF",
      "&:focus": {
        borderColor: "primary",
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    textarea: {
      borderColor: "#FFF",
      backgroundColor: "white",
      "&:focus": {
        borderColor: "primary",
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  shadows: {
    sticker: `3px 3px 3px 2px rgba(0,0,0,0.18)`,
    post: "0 2px 25px 0 rgba(209,209,209,.5), -2px -2px 25px 0 red",
    card: t => `3px 5px ${t.colors.accent}, -3px -5px red`,
  },
  sizes: {
    mainWidth: "800px",
    heroHeight: "350px",
    skewed: "30px",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  styles: {
    root: {
      // uses the theme values provided above
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
  },
  // variants for built-in components
  buttons: {
    primary: {
      borderRadius: "37px",
      cursor: "pointer",
      width: "23rem",
      height: "auto",
      transition: "ease 0.2s",
      ":hover": {
        transform: "scale(1.2)",
      },
    },
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    title: {
      fontFamily: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
  },
  layout: {
    mainContainer: {
      width: "90%",
      maxWidth: "900px",
    },
    heroContainer: {
      width: "100%",
      maxWidth: "900px",
    },
    postContainer: {
      width: "90%",
      maxWidth: "700px",
    },
  },
  links: {
    nav: {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      fontSize: 3,
      fontFamily: "heading",
      left: "0px",
      color: "dimgray",
      paddingRight: 3,
      ":hover": {
        transform: "translateY(-1.5px)",
        transition: "ease 0.5s",
        color: "accent",
      },
      ":active": {
        color: "accent",
      },
    },
    underlined: {
      display: "inline-block",
      textDecoration: "underline",
      color: "black",
      fontWeight: t => t.fontWeights.normal,
      padding: 1,
    },
  },
};
