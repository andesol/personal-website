/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import nextLink from "next/link";
import PostCard from "@components/PostCard";

export default function PostList({ posts }) {
  if (posts === "undefined") return null;

  return (
    <div
      sx={{
        marginBottom: 5,
      }}
    >
      <div>
        {posts &&
          posts.map(post => {
            return <PostCard key={post.slug} post={post} />;
          })}
      </div>
    </div>
  );
}
