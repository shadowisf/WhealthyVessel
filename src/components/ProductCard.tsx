import { Link } from "react-router-dom";

type ProductCardProps = {
  href?: string;
  product_image: string;
  children: React.ReactNode;
};

export default function ProductCard({
  product_image,
  href,
  children,
}: ProductCardProps) {
  return href ? (
    <Link to={href} className="individual-product-card-container animation">
      <img src={product_image} />
      <p>{children}</p>
    </Link>
  ) : (
    <div className="individual-product-card-container animation">
      <img src={product_image} />
      <p>{children}</p>
    </div>
  );
}
