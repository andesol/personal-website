/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import Link from "next/link";
import Card from "@components/Card";

function Post({ post }) {
  return (
    <Card as="article">
      <Heading
        as="h2"
        variant="title"
        sx={{
          display: "inline-block",
        }}
      >
        <Link href={`/blog/${post.slug}`}>
          <a>{post.frontmatter.title}</a>
        </Link>
      </Heading>
      <p>{post.frontmatter.summary}</p>
    </Card>
  );
}

export default Post;
