/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Box } from "theme-ui";
import Image from "next/image";

export default function Avatar() {
  return (
    <div
      sx={{
        borderRadius: "100%",
        position: "relative",
        width: "200px",
        height: "200px",
        border: t => `4px solid ${t.colors.accent}`,
      }}
    >
      <Image
        sx={{ borderRadius: "100%" }}
        src="/static/me.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
