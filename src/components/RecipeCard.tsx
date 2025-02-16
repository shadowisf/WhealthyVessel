import { useNavigate } from "react-router-dom";

type RecipeCardProps = {
  href: string;
  recipe_image: string;
  children: React.ReactNode;
};

export default function RecipeCard({
  recipe_image,
  href,
  children,
}: RecipeCardProps) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(href)} className="recipe-card-container">
      <img src={recipe_image} />
      <p>{children}</p>
    </div>
  );
}
