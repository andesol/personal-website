/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "@components/Layout";

export default function contactPage({ title }) {
  return (
    <Layout pageTitle={title} page="contact">
      <main>
        <p
          sx={{
            display: "grid",
            placeItems: "center",
            fontSize: 4,
          }}
        >
          Under construction
        </p>
      </main>
    </Layout>
  );
}
