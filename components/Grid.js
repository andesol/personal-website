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
      <Card>
        <div
          sx={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <p
            sx={{
              fontSize: 3,
            }}
          >
            <RouteLink variant="underlined" href="/contact">
              Talk to me
            </RouteLink>
            . <br />
            See what I'm doing{" "}
            <RouteLink variant="underlined" href="/now">
              now
            </RouteLink>
            .<br /> Or take a look at what's below.{" "}
          </p>
        </div>
      </Card>
      <IconsCard />
      {posts &&
        posts.map(post => {
          return <PostCard key={post.slug} post={post} />;
        })}
    </Grid>
  );
}
