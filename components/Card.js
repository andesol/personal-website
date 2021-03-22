/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Box } from "theme-ui";

function Card({ children, ...props }) {
  return (
    <Box
      {...props}
      sx={{
        marginBottom: 4,
        padding: 4,
        boxShadow: "post",
        borderRadius: "10px",
        backgroundColor: "background",
      }}
    >
      {children}
    </Box>
  );
}

export default Card;
