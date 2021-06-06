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
          I started to learn web technologies because I wanted to be a craftman,
          but without getting my hands dirty. I liked the idea of creating your
          own space in the internet. The first Udemy course was almost free, but
          it was a trap: I ended up lost in the Javascript ecosystem/desert.
          From that day I keep wandering among frameworks and quirky details.
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
            I’m open for collaborations. Hit me up for making the world a better
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
