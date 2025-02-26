import { primaryColor, secondaryColor } from "../utils/readColors";

type RecipeTemplateProps = {
  recipe_name: string;
  recipe_image: string;
  product_name: string | string[];
  product_image: string | string[];
  ingredients: string[];
  instructions: string[];
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
        <h1>{recipe_name}</h1>

        <img src={recipe_image} />
      </section>

      <main style={{ marginBottom: "100px" }}>
        <section className="ingredients-instructions-container">
          <div>
            <h1 style={{ color: primaryColor }}>INGREDIENTS:</h1>

            <p>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </p>
          </div>

          <div>
            <h1 style={{ color: primaryColor }}>INSTRUCTIONS:</h1>
            <ol style={{ marginLeft: "25px" }}>
              {instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="products-used-container">
          <h1 style={{ color: primaryColor }}>
            PRODUCT/S <span style={{ color: secondaryColor }}>USED:</span>
          </h1>

          <br />

          <div className="products-used-gallery-container">
            {Array.isArray(product_image) && Array.isArray(product_name) ? (
              product_image.map((image, index) => (
                <div className="individual-product-container" key={index}>
                  <img src={image} />
                  <p>{product_name[index]}</p>
                </div>
              ))
            ) : (
              <div className="individual-product-container">
                <img src={product_image as string} />
                <p>{product_name}</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
