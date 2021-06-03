/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Grid, Heading } from "theme-ui";
import RouterLink from "components/RouteLink";
import PostCard from "components/PostCard";

export default function SectionArticles({ posts }) {
  return (
    <div
      sx={{
        paddingTop: 4,
        paddingBottom: 4,
        backgroundColor: "background",
        width: "100%",
        position: "relative",
        zIndex: "1",
      }}
    >
      <Heading as="h2" variant="h2">
        Things I write
      </Heading>
      <Container variant="gridContainer">
        <Grid
          columns={["1fr", "1fr 1fr", "1fr 1fr"]}
          sx={{
            gridColumnGap: 5,
            gridRowGap: 4,
            paddingTop: 4,
          }}
        >
          {posts &&
            posts.map((post, i) => {
              return <PostCard variant="article" key={post.slug} post={post} />;
            })}
        </Grid>
      </Container>
      <div
        sx={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <RouterLink
          href="/blog"
          variant="button"
          sx={{
            display: "inline-block",
            marginTop: 4,
          }}
        >
          Browse notes
        </RouterLink>
      </div>
    </div>
  );
}
