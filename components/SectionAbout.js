/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Text, Card, Link, Heading } from "theme-ui";
import { IconMail } from "./icons";

export default function SectionAbout() {
  return (
    <section
      sx={{
        paddingTop: 4,
        paddingBottom: 4,
        backgroundColor: "gray",
      }}
    >
      <Container variant="mainContainer">
        <Heading as="h2" variant="h2">
          About
        </Heading>
        <Text
          as="p"
          variant="body"
          sx={{
            paddingTop: 4,
          }}
        >
          I started with web development because I wanted to be a craftman. I
          liked the idea of creating your own space in the internet. The first
          Udemy course was almost free, but it was a trap: I ended up trapped in
          the Javascript swamp. Apart from that, I have an engineering
          background which got me two things: a diploma stored in a drawer, and
          some nightmares written in Matlab.
        </Text>
        <Card
          variant="contact"
          sx={{
            marginTop: 5,
            marginLeft: [1, 3, 5],
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            variant="serif"
            sx={{
              width: "75%",
            }}
          >
            I’m open to collaborations. Hit me up for making the world a better
            place through software! (Or making me massively rich, whatever
            works)
          </Text>
          <Link
            variant="contact"
            href="mailto:andesol@protonmail.com"
            sx={{
              marginTop: 3,
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Contact
            <IconMail sx={{ height: 16 }} />
          </Link>
        </Card>
      </Container>
    </section>
  );
}
