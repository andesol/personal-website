import RouteLink from "components/RouteLink";

export default function Details() {
  return (
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
  );
}
