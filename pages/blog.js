import Layout from "@components/Layout";
import PostList from "@components/PostList";
import { Container } from "theme-ui";
import Grid from "@components/GridArticles";
import matter from "gray-matter";

export default function blogPage({ posts, title, ...props }) {
  return (
    <Layout pageTitle={`${title} | Notes`} page="blog">
      <main>
        <Container
          variant="mainContainer"
          sx={{ paddingTop: 4, paddingBottom: 3 }}
        >
          <Grid posts={posts} />
        </Container>
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
