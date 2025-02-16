import { primaryColor, secondaryColor } from "../utils/readColors";

type RecipeTemplateProps = {
  recipe_name: string;
  recipe_image: string;
  product_name: string | string[];
  product_image: string | string[];
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
          <p>
            <span style={{ color: secondaryColor, fontWeight: "bolder" }}>
              PRODUCT/S:
            </span>{" "}
            {Array.isArray(product_name)
              ? product_name.join(", ")
              : product_name}
          </p>
        </div>

        <img src={recipe_image} />
      </section>

      <main style={{ marginBottom: "100px" }}>
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

        <div className="recipe-image-container">
          {Array.isArray(product_image) && Array.isArray(product_name) ? (
            product_image.map((image, index) => (
              <div key={index}>
                <img src={image} />
                <p>{product_name[index]}</p>
              </div>
            ))
          ) : (
            <div className="image-container">
              <img src={product_image as string} />
              <p>{product_name}</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
