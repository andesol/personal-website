/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import matter from "gray-matter";

import RouterLink from "@components/RouteLink";
import Layout from "@components/Layout";
import PostList from "@components/PostList";
import Hero from "@components/Hero";

export default function indexPage({ posts, title }) {
  return (
    <Layout pageTitle={title} page="home">
      <main>
        <Hero />
        <section>
          <PostList posts={posts} />
        </section>
        <div
          sx={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <RouterLink
            variant="nav"
            href="/blog"
            sx={{
              display: "inline-block",
              margin: "0 auto",
              ":hover svg": {
                stroke: "primary",
              },
            }}
          >
            Read more{" "}
            <svg
              sx={{
                verticalAlign: "middle",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
            </svg>
          </RouterLink>
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
