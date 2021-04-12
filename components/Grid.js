/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Grid } from "theme-ui";
import Card from "@components/Card";
import IconsCard from "@components/IconsCard";
import PostCard from "@components/PostCard";
import RouteLink from "components/RouteLink";

export default function mainGrid({ posts }) {
  if (posts === "undefined") return null;

  return (
    <Grid columns={["1fr", "1fr 1fr", "1fr 1fr"]}>
      {posts &&
        posts.map((post, i) => {
          return <PostCard key={post.slug} post={post} />;
        })}
    </Grid>
  );
}
