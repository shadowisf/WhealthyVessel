import { Link } from "react-router-dom";

type CustomButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  color: string;
  href?: string;
};

export default function CustomButton({
  children,
  onClick,
  color,
  href,
}: CustomButtonProps) {
  return href ? (
    <Link
      className="anchor-button"
      style={{ backgroundColor: `${color}` }}
      to={href}
    >
      {children}
    </Link>
  ) : (
    <button style={{ backgroundColor: `${color}` }} onClick={() => onClick}>
      {children}
    </button>
  );
}
