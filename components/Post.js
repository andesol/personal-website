/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Heading } from "theme-ui";
import Link from "next/link";

function Post({ post }) {
  return (
    <article
      sx={{
        marginBottom: 4,
        padding: 4,
        boxShadow: "post",
        borderRadius: "1.2rem",
      }}
    >
      <Heading
        as="h2"
        sx={{
          display: "inline-block",
        }}
      >
        <Link href={`/post/${post.slug}`}>
          <a>{post.frontmatter.title}</a>
        </Link>
      </Heading>
      <p>{post.markdownBody}</p>
    </article>
  );
}

export default Post;
