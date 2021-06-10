/** @jsxRuntime classic */
/** @jsx jsx */
import { Heading, Link, jsx, Container, Text, Box } from "theme-ui";
import Layout from "@components/Layout";

export default function nowPage({ title }) {
  return (
    <Layout pageTitle={title} page="now">
      <main>
        <Container
          sx={{
            marginTop: "5rem",
          }}
          variant="postContainer"
        >
          <Box
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
              variant="h2"
              sx={{
                width: "100%",
              }}
            >
              💻 Doing
            </Heading>
            <Text variant="body">
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
            </Text>
            <Heading
              as="h2"
              variant="h2"
              sx={{
                marginTop: "4",
              }}
            >
              📕 Learning
            </Heading>

            <Text as="p" variant="body">
              <strong>SQL</strong>. I have used some no-SQL databases and they
              did the trick, but I couldn't spend one more day without knowing
              the foundamentals.
            </Text>
          </Box>
        </Container>
      </main>
    </Layout>
  );
}
