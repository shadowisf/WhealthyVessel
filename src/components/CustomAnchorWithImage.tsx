import { Link } from "react-router-dom";

type CustomAnchorWithImageProps = {
  href?: string;
  color: string;
  children?: React.ReactNode;
  className?: string;
  image: string;
  width: string;
};

export default function CustomAnchorWithImage({
  children,
  href,
  color,
  className,
  image,
  width,
}: CustomAnchorWithImageProps) {
  return (
    <Link
      className={className}
      style={{
        color: color,
        display: "flex",
        alignItems: "center",
        gap: "7px",
      }}
      to={href ? href : ""}
      target={"_blank"}
    >
      <img style={{ width: width }} src={image} />
      {children ? <span>{children}</span> : null}
    </Link>
  );
}
