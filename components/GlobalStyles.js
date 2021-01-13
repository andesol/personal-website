import { Global } from "@emotion/core";

function GlobalStyles() {
  return (
    <Global
      styles={theme => ({
        "#__next": {
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        },

        footer: {
          marginTop: "auto",
        },

        ul: {
          margin: 0,
          padding: 0,
        },
        li: {
          listStyle: "none",
        },
        a: {
          color: "inherit",
          textDecoration: "none",
          cursor: "pointer",
        },
        "a:focus": {
          border: "2px dotted orange",
        },
        "button:focus": {
          border: "2px dotted orange",
        },
        pre: {
          width: "70%",
          margin: "0 auto",
        },
      })}
    />
  );
}

export default GlobalStyles;
