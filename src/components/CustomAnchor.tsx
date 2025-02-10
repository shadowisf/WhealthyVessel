import { Link } from "react-router-dom";

type CustomAnchorProps = {
  href: string;
  color: string;
  children: React.ReactNode;
  className?: string;
};

export default function CustomAnchor({
  children,
  href,
  color,
  className,
}: CustomAnchorProps) {
  return (
    <Link
      className={className}
      style={{ color: color, textDecoration: "none" }}
      to={href}
    >
      {children}
    </Link>
  );
}
