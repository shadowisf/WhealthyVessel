import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  return (
    <>
      <main style={{ marginTop: "200px", marginBottom: "200px" }}>
        <section className="recipe-gallery-container">
          <RecipeCard
            recipe_image="/images/recipes/herb-roasted-turkey.jpg"
            href="/recipes/herbed-roasted-turkey"
          >
            HERBED ROASTED TURKEY
          </RecipeCard>
          <RecipeCard
            recipe_image="/images/recipes/herb-roasted-turkey.jpg"
            href="/recipes/herbed-roasted-turkey"
          >
            HERBED ROASTED TURKEY
          </RecipeCard>
          <RecipeCard
            recipe_image="/images/recipes/herb-roasted-turkey.jpg"
            href="/recipes/herbed-roasted-turkey"
          >
            HERBED ROASTED TURKEY
          </RecipeCard>
        </section>
      </main>
    </>
  );
}
