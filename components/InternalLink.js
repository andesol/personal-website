import nextLink from "next/link";
import { Link } from "theme-ui";

function InternalLink({ children }) {
  return <Link as={nextLink}>{children}</Link>;
}

export default InternalLink;
