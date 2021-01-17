/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Flex } from "theme-ui";
import Sticker from "@components/Sticker";

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
          padding: 0,
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
            maxWidth: "35ch",
            fontSize: 3,
          }}
        >
          I share here my public notes on
          <Sticker sx={{ marginLeft: "10px" }} color="primary">
            {" "}
            web development
          </Sticker>
        </p>
      </Box>
    </div>
  );
}

export default Hero;
