/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "@components/Layout";
import Resource from "@components/Resource";
import matter from "gray-matter";

function LibraryPage({ resources }) {
  console.log(resources);
  return (
    <Layout>
      <h2 sx={{ fontSize: 32 }}>Library</h2>
      <p>
        A collections of links that I read/listened to and I consider worth
        recommending
      </p>
      <div>
        {resources.map(resource => {
          return (
            <Resource
              title={resource.frontmatter.title}
              link={resource.frontmatter.url}
              tags={resource.frontmatter.tags}
              body={resource.markdownBody}
            />
          );
        })}
      </div>
    </Layout>
  );
}

export default LibraryPage;

export async function getStaticProps(context) {
  const resources = (context => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
      };
    });
    return data;
  })(require.context("../content/resources", true, /\.md$/));

  return {
    props: {
      resources,
    },
  };
}
