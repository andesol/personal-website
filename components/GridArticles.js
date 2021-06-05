/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Grid, Card } from "theme-ui";
import PostCard from "components/PostCard";

export default function mainGrid({ posts }) {
  if (posts === "undefined") return null;

  return (
    <Grid columns={["1fr", "1fr 1fr", "1fr 1fr"]}>
      {posts &&
        posts.map((post, i) => {
          return <PostCard variant="article" key={post.slug} post={post} />;
        })}
    </Grid>
  );
}
