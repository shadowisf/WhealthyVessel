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
      <section style={{ marginTop: "120px" }} className="banner-container">
        <img src="/images/recipe-banner.jpg" />
        <div>
          <h1>THE RECIPE CORNER</h1>
        </div>
      </section>

      <main>
        <section className="filter-container">
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

<section style={{ margin: "0px 0" }}>
  <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
    
    {/* Left Column: Image */}
    <div style={{ flex: 1, textAlign: "center" }}>
      <img 
        src="images/scienceoffood.png"
        alt="Science of Food" 
        width={700}
        style={{ display: "block", margin: "0 auto" }}
      />
    </div>

    {/* Right Column: Heading + Paragraph */}
    <div style={{ flex: 1, fontSize: "18px", lineHeight: "1.6", textAlign: "justify" }}>
      {/* Heading for this column */}
      <h1 style={{ marginBottom: "20px", marginTop: "60px" }}>OUR FOOD</h1>

      {/* Paragraph */}
      <p style={{ margin: "0", lineHeight: "2" }}>
        <strong>Saladmaster</strong> cookware items are crafted to deliver both{" "}
        <strong>performance and wellness</strong> in every meal. Built with premium{" "}
        <strong>stainless steel</strong> and backed by a{" "}
        <strong>lifetime warranty</strong>, these pieces are made to last for
        generations. Their advanced design allows you to cook with little to no oil,
        helping <strong>preserve essential nutrients</strong> and natural flavors
        while promoting a healthier lifestyle. With even heat distribution, durable
        construction, and elegant style, Saladmaster cookware transforms everyday
        cooking into an <strong>easy, enjoyable, and nourishing experience.</strong>
      </p>
    </div>

  </div>
</section>

        

        <section>
          <h1 className="center">ENTREE</h1>

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

        <section>
          <h1 className="center">DESSERT</h1>

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
