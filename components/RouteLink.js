import { Link } from "theme-ui";
import NextLink from "next/link";

export default function RouteLink({ href, children, ...props }) {
  return (
    <NextLink href={href}>
      <Link sx={{ padding: 0 }} {...props} href={href}>
        {children}
      </Link>
    </NextLink>
  );
}
