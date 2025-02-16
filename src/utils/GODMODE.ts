type Recipe = {
  recipe_image: string;
  product_name: string;
  product_image: string;
  ingredients: string[];
  instructions: string;
};

export const recipes: Record<string, Recipe> = {
  "HERBED ROASTED TURKEY": {
    recipe_image: "/images/recipes/herb-roasted-turkey.jpg",
    product_name: "12 Qt. Roaster",
    product_image: "/images/products/12-qt-roaster.png",
    ingredients: [
      "1 large turkey (14-22 lbs.), cleaned & giblets removed",
      "2 navel oranges, zested #1 cone & quartered",
      "3 large onions, quartered",
      "4-5 stalks celery, cut into 1” pieces",
      "4 large carrots, #4 cone",
      "2 tbsp fresh rosemary, finely chopped",
      "2 tbsp fresh sage, finely chopped",
      "2 tbsp fresh thyme, finely chopped",
      "2 tbsp fresh Italian parsley, finely chopped",
      "3 tbsp minced garlic",
      "½ cup butter, softened",
      "Salt and pepper",
    ],
    instructions:
      "Combine zest, herbs, garlic, and butter together in a medium bowl. Liberally sprinkle turkey with salt and pepper, seasoning the cavity as well. Rub turkey down with herb butter (cavity as well) and then stuff with carrots, celery, navel oranges and 1 onion. Place remaining ingredients on bottom of Roaster and place turkey in, breast side up. Cover and cook on medium until Vapo-Valve clicks, then reduce heat to low. Cook for about 2 ½ - 3 hours or until internal temperature reaches 165 degrees when checked in the thickest part of the thigh.",
  },
};
