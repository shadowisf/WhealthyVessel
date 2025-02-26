import { useRef } from "react";
import CustomButton from "../components/CustomButton";
import RecipeCard from "../components/RecipeCard";
import { allRecipes, recipes } from "../utils/GODMODE";
import { primaryColor } from "../utils/readColors";

export default function Recipes() {
  const entreeRef = useRef<HTMLDivElement | null>(null);
  const dessertRef = useRef<HTMLDivElement | null>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 250,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section
        style={{ marginTop: "125px", marginBottom: "100px" }}
        className="recipe-banner-container"
      >
        <img src="/images/recipe-banner.jpg" />
        <h1>THE RECIPE CORNER</h1>

        <section className="recipe-filter-container">
          <CustomButton
            onClick={() => scrollToRef(entreeRef)}
            backgroundColor={primaryColor}
            color="white"
          >
            ENTREE
          </CustomButton>

          <CustomButton
            onClick={() => scrollToRef(dessertRef)}
            backgroundColor={primaryColor}
            color="white"
          >
            DESSERT
          </CustomButton>
        </section>
      </section>

      <main style={{ marginBottom: "100px" }}>
        <section className="recipe-category-container">
          <h1>ENTREE</h1>

          <div ref={entreeRef} className="recipe-gallery-container">
            {allRecipes
              .filter((recipe) => recipes[recipe].tag.includes("entree"))
              .map((recipe) => {
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
          </div>
        </section>

        <section className="recipe-category-container">
          <h1>DESSERT</h1>

          <div ref={dessertRef} className="recipe-gallery-container">
            {allRecipes
              .filter((recipe) => recipes[recipe].tag.includes("dessert"))
              .map((recipe) => {
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
          </div>
        </section>
      </main>
    </>
  );
}
