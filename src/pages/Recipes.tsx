import RecipeCard from "../components/RecipeCard";
import { allRecipes, recipes } from "../utils/GODMODE";

export default function Recipes() {
  return (
    <>
      <main style={{ marginTop: "200px", marginBottom: "200px" }}>
        <section className="recipe-gallery-container">
          {allRecipes.map((recipe) => {
            return (
              <RecipeCard
                key={recipe}
                recipe_image={recipes[recipe].recipe_image}
                href={`/recipes/${recipe.replace(/ /g, "-").toLowerCase()}`}
              >
                {recipe}
              </RecipeCard>
            );
          })}
        </section>
      </main>
    </>
  );
}
