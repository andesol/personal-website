/** @jsxRuntime classic */
/** @jsx jsx */
import { Heading, Link, jsx, Container } from "theme-ui";
import Layout from "@components/Layout";

export default function contactPage({ title }) {
  return (
    <Layout pageTitle={title} page="now">
      <main>
        <Container
          sx={{
            marginTop: "5rem",
          }}
          variant="postContainer"
        >
          <p
            sx={{
              display: "grid",
              placeItems: "center",
              fontSize: 4,
            }}
          >
            <Heading as="h1" sx={{ marginBottom: 4 }}>
              NOW!
            </Heading>
            <Heading
              as="h2"
              sx={{
                width: "100%",
              }}
            >
              💻 Learning
            </Heading>
            <p>
              I started with Angular a couple of month ago. I knew React but I
              wanted to get a different view on Javascript (or Typescript, for
              that matters) front end frameworks. I started an{" "}
              <Link
                variant="underlined"
                href="https://github.com/andesol/quizz-app"
                target="_blank"
              >
                app for solving quizzes
              </Link>
              , combining Angular with Nest.js, a back end framework that
              follows similar conventions.
            </p>
            <Heading
              as="h2"
              sx={{
                width: "100%",
              }}
            >
              📕 Reading
            </Heading>
            <p>
              <em>Cinco horas con Mario</em>, by Miguel Delibes. A long
              monologue describing the Spain of the 50-60.
            </p>
          </p>
        </Container>
      </main>
    </Layout>
  );
}
