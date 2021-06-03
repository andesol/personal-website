/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import { IconCSS, IconJS, IconReact, IconAngular } from "@components/icons";

export default function IconCards(props) {
  return (
    <Card {...props}>
      <div>
        <p>Technologies I use to talk about, when I have the time to </p>
        <Flex
          sx={{
            height: "60px",
            " > svg": {
              opacity: "0.5",
            },
            "> svg:hover": {
              opacity: "1",
              transform: "scale(1.1)",
            },
          }}
        >
          <IconJS />
          <IconCSS />
          <IconReact />
          <IconAngular />
        </Flex>
      </div>
    </Card>
  );
}
