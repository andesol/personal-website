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
    red: "#D52941",
    accent: "#FFE37E",
    muted: "dimgray",
    gray: "#F7F7F7",
    darkgray: "#4e4e4e",
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
    post: "0px 2px 25px 0px rgba(210,210,210,0.5)",
    avatar: "0 4px 4px 0 rgba(0,0,0,.25)",
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
    div: {
      color: "red",
    },
  },
  // variants for built-in components
  buttons: {},
  cards: {
    article: {
      paddingTop: 3,
      paddingBottom: 3,
      paddingLeft: 4,
      paddingRight: 4,
      boxShadow: "0 2px 25px 0 rgba(209,209,209,0.5)",
      transition: "0.4s ease",
      "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: "2px 8px 25px 0px rgba(210,210,210,0.7)",
      },
    },
    contact: {
      width: "100%",
      paddingTop: 3,
      paddingBottom: 3,
      paddingLeft: 4,
      paddingRight: 4,
      backgroundColor: "accent",
      color: "fakeBlack",
      fontSize: 3,
    },
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
    h1: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: 6,
    },
    h2: {
      width: "100%",
      fontFamily: "heading",
      fontWeight: "body",
      lineHeight: "heading",
      fontSize: 5,
      paddingTop: 3,
      paddingBottom: 3,
      color: "darkgray",
    },
    serif: {
      fontFamily: "heading",
      fontSize: 3,
    },
    body: {
      width: "100%",
      fontFamily: "body",
      fontWeight: "body",
      fontSize: 3,
      padding: 2,
    },
  },
  layout: {
    mainContainer: {
      width: "90%",
      maxWidth: "900px",
    },
    gridContainer: {
      width: "90%",
      maxWidth: "700px",
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
      marginRight: 3,
      "::after": {
        content: "''",
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "100%",
        height: "3px",
        backgroundColor: "accent",
        transition: "transform 300ms",
        transform: "scale(0)",
        transformOrigin: "center",
      },
      ":hover": {
        color: "black",
        "::after": {
          transform: "scale(1)",
        },
      },
    },
    underlined: {
      display: "inline-block",
      textDecoration: "underline",
      color: "black",
      fontWeight: "body",
      padding: 1,
    },
    button: {
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 4,
      paddingRight: 4,
      fontFamily: "heading",
      fontSize: 3,
      borderRadius: "66px",
      backgroundColor: "accent",
      color: "fakeBlack",
      transition: "ease 0.2s",
      ":hover": {
        transform: "scale(1.03)",
      },
    },
    contact: {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      height: "45px",
      paddingTop: 3,
      paddingBottom: 3,
      paddingLeft: 4,
      paddingRight: 4,
      borderRadius: "66px",
      backgroundColor: "background",
      color: "fakeBlack",
      fontFamily: "heading",
      transition: "ease 0.2s",
      ":hover": {
        transform: "scale(1.03)",
      },
    },
  },
};
