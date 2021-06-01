/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Box } from "theme-ui";

function Card({ children, ...props }) {
  return (
    <Box
      {...props}
      sx={{
        padding: 4,
        // boxShadow: "post",
        borderRadius: "10px",
        backgroundColor: "background",
        ":hover": {
          transform: "translateY(-2px)",
          transition: "ease 0.3s",
          boxShadow: "card",
        },
      }}
    >
      {children}
    </Box>
  );
}

export default Card;
