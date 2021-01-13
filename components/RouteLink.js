import { Link } from "theme-ui";
import NextLink from "next/link";

function RouteLink({ href, children, ...props }) {
  return (
    <NextLink href={href}>
      <Link {...props} href={href}>
        {children}
      </Link>
    </NextLink>
  );
}

export default RouteLink;
