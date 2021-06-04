/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Container, Flex, Text } from "theme-ui";
import Avatar from "components/Avatar";
import { IconArrowDown } from "./icons";

function Hero() {
  return (
    <section
      sx={{
        display: "flex",
        flexDirection: "column",
        color: "fakeBlack",
        minHeight: ["650px", "550px", "450px"],
        position: "relative",
        backgroundColor: "gray",
        padding: "2rem",
        zIndex: 2,
      }}
    >
      {/* <Container sx={{ border: "1px solid red" }} variant="mainContainer"> */}
      <Flex
        sx={{
          flexWrap: "wrap",
          maxWidth: "800px",
          width: "100%",
          margin: "auto",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: ["center", "center", "flex-start"],
            width: ["100%", "100%", "auto"],
            order: [2, 2, 1],
            textAlign: "center",
          }}
        >
          <Heading as="h1" variant="h1">
            Hello, I'm Andreu!
          </Heading>
          <Text
            variant="serif"
            sx={{
              fontSize: 4,
              paddingTop: 3,
            }}
          >
            I collect here some of my notes on web development
          </Text>
        </Flex>
        <Flex
          sx={{
            order: [1, 1, 2],
            width: ["100%", "100%", "auto"],
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 3,
          }}
        >
          <Avatar />
        </Flex>
      </Flex>
      <div sx={{ textAlign: "center" }}>
        <IconArrowDown sx={{ stroke: "muted" }} />
      </div>
    </section>
  );
}

export default Hero;
