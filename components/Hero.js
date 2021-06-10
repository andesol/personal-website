/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Heading, Flex, Text } from "theme-ui";
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
        backgroundColor: "gray",
        padding: "2rem",
      }}
    >
      <Flex
        sx={{
          flexWrap: "wrap",
          maxWidth: "785px",
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
            width: ["100%", "100%", "60%"],
            order: [2, 2, 1],
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
            I'm a content creator that helps people to... {"\n"} Nah, I just
            share some of my notes on{" "}
            <span
              sx={{
                position: "relative",
                zIndex: 0,
                "::after": {
                  content: "''",
                  position: "absolute",
                  top: 1,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "accent",
                  zIndex: -1,
                  transform: "rotate(-1deg)",
                },
              }}
            >
              web development
            </span>
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
