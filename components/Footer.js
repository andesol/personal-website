/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Flex, Heading } from "theme-ui";
import Form from "@components/Form";

function Footer() {
  return (
    <footer
      sx={{
        backgroundColor: "secondary",
        padding: "3rem",
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          width: "90%",
          maxWidth: "500px",
          m: "0 auto",
        }}
      >
        <Heading as="h3">Any comment?</Heading>
        <Form />
      </Flex>
    </footer>
  );
}

export default Footer;
