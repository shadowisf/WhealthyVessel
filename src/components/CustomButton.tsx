import { Link } from "react-router-dom";

type CustomButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  color: string;
  href?: string;
  backgroundColor: string;
};

export default function CustomButton({
  children,
  onClick,
  color,
  href,
  backgroundColor,
}: CustomButtonProps) {
  return href ? (
    <Link
      className="anchor-button animation"
      style={{ backgroundColor: `${backgroundColor}`, color: `${color}` }}
      to={href}
    >
      {children}
    </Link>
  ) : (
    <button
      className="animation"
      style={{ backgroundColor: `${backgroundColor}`, color: `${color}` }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
