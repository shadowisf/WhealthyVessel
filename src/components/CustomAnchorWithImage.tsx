import { Link } from "react-router-dom";

type CustomAnchorWithImageProps = {
  href?: string;
  color: string;
  children?: React.ReactNode;
  className?: string;
  image: string;
  width: string;
  onClick?: () => void;
};

export default function CustomAnchorWithImage({
  children,
  href,
  color,
  className,
  image,
  width,
  onClick,
}: CustomAnchorWithImageProps) {
  return (
    <Link
      className={className}
      style={{
        color: color,
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: "7px",
      }}
      to={href ? href : ""}
      target={href ? "_blank" : ""}
      onClick={onClick}
    >
      <img style={{ width: width }} src={image} />
      {children ? <span>{children}</span> : null}
    </Link>
  );
}
