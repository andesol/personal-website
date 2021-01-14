/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

function Sticker({ color, children, ...props }) {
  console.log(color);
  return (
    <span
      {...props}
      sx={{
        display: "inline-block",
        fontWeight: "bold",
        position: "relative",
        color: "white",
        transform: "rotate(-1.5deg)",
        marginRight: 3,
        "::before": {
          position: "absolute",
          display: "inline-block",
          content: '""',
          width: "108%",
          height: "30px",
          backgroundColor: () => color,
          top: "2px",
          left: "-6px",
          zIndex: "-1",
          boxShadow: "sticker",
        },
      }}
    >
      {children}
    </span>
  );
}

export default Sticker;
