/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading } from "theme-ui";

function Hero() {
  return (
    <div
      sx={{
        minHeight: "hero",
        position: "relative",
        backgroundColor: "body",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          marginTop: "6vw",
          padding: 4,
        }}
      >
        <Heading
          sx={{
            fontSize: 6,
          }}
        >
          Hello, I'm Andreu
        </Heading>
        <p
          sx={{
            maxWidth: "55ch",
            fontSize: 3,
          }}
        >
          <span
            sx={{
              display: "inline-block",
              fontWeight: "bold",
              position: "relative",
              color: "#FFF",
              transform: "rotate(-1.5deg)",
              marginRight: 3,

              // color: "primary",
              // textDecorationStyle: "dotted",
              // textDecorationLine: "underline",
              "::before": {
                position: "absolute",
                display: "inline-block",
                content: '""',
                width: "108%",
                height: "30px",
                backgroundColor: "primary",
                top: "2px",
                left: "-6px",
                zIndex: "-1",
                boxShadow: "sticker",
              },
            }}
          >
            {""} Web developer {""}
          </span>
          aficionado, with a particular focus in the Javascript ecosystem. Here
          I keep track of what I discover and share what I learn.
        </p>
      </Box>
    </div>
  );
}

export default Hero;
