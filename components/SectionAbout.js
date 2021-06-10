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
        <Heading as="h2" variant="h2" sx={{ textAlign: "center" }}>
          About
        </Heading>
        <Text
          as="p"
          variant="body"
          sx={{
            paddingTop: 4,
            maxWidth: "50ch",
            margin: "0 auto",
          }}
        >
          I started to learn web technologies because I wanted to be a craftman,
          but without getting my hands dirty. I liked the idea of shaping your
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
            I’m open for collaborations. Let's make the world a better place
            through software! (Or let's get rich, whatever works)
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
