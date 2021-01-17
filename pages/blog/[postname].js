/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import RouteLink from "@components/RouteLink";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "@components/Layout";

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <React.Fragment></React.Fragment>;

  return (
    <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`} page="article">
      <article sx={{ fontSize: 3 }}>
        <h1>{frontmatter.title}</h1>
        <div>
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
      <div
        sx={{
          display: "grid",
          placeItems: "center",
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        <RouteLink variant="underlined" href="/blog">
          Back to index
        </RouteLink>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params;

  const content = await import(`../../content/posts/${postname}.md`);
  const config = await import(`../../siteconfig.json`);
  const data = matter(content.default);

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = (context => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);

      return slug;
    });
    return data;
  })(require.context("../../content/posts", true, /\.md$/));

  const paths = blogSlugs.map(slug => `/blog/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
