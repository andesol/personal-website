import { Global } from "@emotion/react";

export default props => (
  <Global
    styles={theme => ({
      "*": {
        border: "1px solid red",
      },
    })}
  />
);
