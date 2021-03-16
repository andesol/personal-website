/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Container } from "theme-ui";
import Sticker from "@components/Sticker";
import IconsCard from "@components/IconsCard";
import React from "react";

function Hero() {
  return (
    <div>
      <div
        sx={{
          height: "40vh",
          minHeight: "450px",
          position: "relative",
          backgroundColor: "secondary",
          margin: "0 auto",
          padding: "2rem",
          clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 3vw), 0 100%)",
        }}
      >
        <Container variant="heroContainer">
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
                fontSize: 7,
              }}
            >
              Hello, I'm Andreu
            </Heading>
            <p
              sx={{
                fontSize: 4,
              }}
            >
              Here I collect some notes about
              <Sticker sx={{ marginLeft: "10px" }} color="primary">
                {" "}
                web development
              </Sticker>
            </p>
          </Box>
        </Container>
      </div>
    </div>
  );
}

export default Hero;
