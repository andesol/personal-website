/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
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
        ":hover": {
          img: {
            filter: "sepia(100%)",
          },
          // span: {
          //   visibility: "visible",
          // },
        },
      }}
    >
      <Image
        sx={{
          borderRadius: "100%",
          position: "relative",
          transition: "1s",
        }}
        src="/static/avatar-me.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        priority="true"
      />
      {/* <span
        sx={{
          visibility: "hidden",
          width: "220px",
          backgroundColor: "background",
          color: "text",
          textAlign: "center",
          borderRadius: "6px",
          padding: "5px 0",
          position: "absolute",
          zIndex: "1",
          bottom: "100%",
          left: "50%",
          marginLeft: "-110px",
          "::after": {
            content: "''",
            position: "absolute",
            top: "100%",
            left: "50%",
            marginLeft: "-5px",
            borderWidth: "5px",
            borderStyle: "solid",
            borderColor: "red transparent transparent transparent",
          },
        }}
      >
        Can you feel the influence?
      </span> */}
    </div>
  );
}
