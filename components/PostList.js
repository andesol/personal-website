/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import nextLink from "next/link";
import Post from "@components/Post";

export default function PostList({ posts }) {
  if (posts === "undefined") return null;

  return (
    <div
      sx={{
        // border: "2px solid grey",
        padding: "2rem",
        marginBottom: 5,
      }}
    >
      <div>
        {posts &&
          posts.map(post => {
            return <Post key={post.slug} post={post} />;
          })}
      </div>
      <Link as={nextLink} variant="nav" href="/blog">
        Read more
      </Link>
    </div>
  );
}
