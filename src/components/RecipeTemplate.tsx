import { primaryColor } from "../utils/readColors";

type RecipeTemplateProps = {
  recipe_name: string;
  recipe_image: string;
  product_name: string;
  product_image: string;
  ingredients: string[];
  instructions: string;
};

export default function RecipeTemplate({
  recipe_name,
  recipe_image,
  product_name,
  product_image,
  ingredients,
  instructions,
}: RecipeTemplateProps) {
  return (
    <>
      <section
        className="recipe-banner-container"
        style={{ marginTop: "125px", marginBottom: "100px" }}
      >
        <div>
          <h1>{recipe_name}</h1>
          <h5>
            <span style={{ color: primaryColor }}>PRODUCT:</span> {product_name}
          </h5>
        </div>

        <img src={recipe_image} />
      </section>

      <main style={{ marginBottom: "100px" }}>
        <section>
          <div className="recipe-row">
            <div>
              <h2 style={{ color: primaryColor }}>INGREDIENTS:</h2>
              <p>
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </p>
            </div>

            <div>
              <h2 style={{ color: primaryColor }}>INSTRUCTIONS:</h2>
              <p>{instructions}</p>
            </div>
          </div>

          <div className="image-container">
            <img src={product_image} />
            <p>{product_name}</p>
          </div>
        </section>
      </main>
    </>
  );
}
