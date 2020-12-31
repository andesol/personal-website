/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Link } from "theme-ui";

function Resource({ title, link, tags, body }) {
  console.log(title);
  return (
    <Flex
      as="article"
      sx={{
        border: "1px solid black",
        flexDirection: "column",
      }}
    >
      <Flex
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Link href={link}>{title}</Link>
        <div>{tags}</div>
      </Flex>
      <div>{body}</div>
    </Flex>
  );
}

export default Resource;
