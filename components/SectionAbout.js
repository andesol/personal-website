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
          variant="body"
          sx={{
            paddingTop: 4,
          }}
        >
          I started to learn web development with a craftsman mindset: I liked
          the idea of creating your own space in the internet. Warning for
          begginers: be careful. The first Udemy course is almost free, but you
          may end up trapped in the Javascript swamp. Apart from that, I have an
          engineering background which got me two things: a diploma stored in a
          drawer, and ambivalent relation with Matlab.
        </Text>
        <Card
          variant="contact"
          sx={{
            marginTop: 5,
            marginLeft: [1, 3, 5],
            display: "flex",
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
            I’m open for collaborations. Hit me up for making the world a better
            place through software! (Or making me massively rich, whatever
            works)
          </Text>
          <Link variant="contact" href="mailto:andesol@protonmail.com">
            Contact
            <IconMail sx={{ height: 16 }} />
          </Link>
        </Card>
      </Container>
    </section>
  );
}
