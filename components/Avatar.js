/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Box } from "theme-ui";
import Image from "next/image";

export default function Avatar() {
  return (
    <div
      sx={{
        position: "relative",
        width: "200px",
        height: "200px",
        border: "4px solid white",
        borderRadius: "100%",
        boxShadow: "avatar",
      }}
    >
      <Image
        sx={{ borderRadius: "100%" }}
        src="/static/me.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        priority="true"
      />
    </div>
  );
}
