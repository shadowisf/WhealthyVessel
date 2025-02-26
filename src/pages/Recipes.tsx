import RecipeCard from "../components/RecipeCard";
import { allRecipes, recipes } from "../utils/GODMODE";

export default function Recipes() {
  return (
    <>
      <section
        style={{ marginTop: "125px", marginBottom: "100px" }}
        className="recipe-banner-container"
      >
        <img src="/images/recipe-banner.jpg" />

        <h1>THE RECIPE CORNER</h1>
      </section>

      <main style={{ marginBottom: "100px" }}>
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
