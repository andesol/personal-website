/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Container } from "theme-ui";
import Avatar from "components/Avatar";

function Hero() {
  return (
    <div>
      <div
        sx={{
          color: "fakeBlack",
          minHeight: ["650px", "550px", "450px"],
          position: "relative",
          backgroundColor: "pale",
          margin: "0 auto",
          padding: "2rem",
          zIndex: 2,
        }}
      >
        <Container variant="heroContainer">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5vw",
              padding: 0,
            }}
          >
            <Heading
              as="h1"
              sx={{
                fontSize: 6,
                width: "65%",
                paddingRight: 4,
                hyphens: "auto",
              }}
            >
              Hello, I'm Andreu! Here you can find some notes on
              <span sx={{ color: "accent" }}> web development</span>.
            </Heading>
            <Avatar />
          </Box>
        </Container>
      </div>
    </div>
  );
}

export default Hero;
