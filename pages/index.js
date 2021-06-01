/** @jsxRuntime classic */
/** @jsx jsx */
import { Container, Flex, jsx } from "theme-ui";

import matter from "gray-matter";

import RouterLink from "@components/RouteLink";
import Layout from "@components/Layout";
import Hero from "@components/Hero";
import { IconArrow } from "@components/icons";
import Grid from "@components/Grid";

export default function indexPage({ posts, title }) {
  return (
    <Layout pageTitle={title} page="home">
      <main>
        <Hero />
        <div
          sx={{
            backgroundColor: "contrast",
            width: "100%",
            position: "relative",
            zIndex: "1",
            padding: "5vw",
          }}
        >
          <Container variant="mainContainer">
            <Grid posts={posts} />
          </Container>
          <div
            sx={{
              display: "grid",
              placeItems: "center",
            }}
          >
            <RouterLink
              href="/blog"
              variant="underlined"
              sx={{
                display: "inline-block",
                marginTop: 4,
                color: "fakeBlack",
              }}
            >
              <Flex
                sx={{
                  displat: "inline-flex",
                  alignItems: "center",
                  paddingTop: 2,
                  paddingBottom: 2,
                  paddingLeft: 3,
                  paddingRight: 3,
                  backgroundColor: "pale",
                  borderRadius: "10px",
                }}
              >
                Browse notes
                <IconArrow sx={{ position: "relative" }} />
              </Flex>
            </RouterLink>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const posts = (context => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      // turn "./example.md" into "example"
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });

    return data;
  })(require.context("../content/posts", true, /\.md$/));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
