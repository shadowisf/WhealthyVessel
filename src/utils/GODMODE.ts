type Recipe = {
  recipe_image: string;
  product_name: string | string[];
  product_image: string | string[];
  ingredients: string[];
  instructions: string;
};

export const recipes: Record<string, Recipe> = {
  /* #1 */
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

  /* #2 */
  "VEGGIE LASAGNA": {
    recipe_image: "/images/recipes/veggie-lasagna.jpg",
    product_name: ["Food Processor", `12" Electric Oil Core Skillet`],
    product_image: [
      "/images/products/food-processor.png",
      "/images/products/12-electric-oil-core-skillet.png",
    ],
    ingredients: [
      "1 onion, strung, use Cone #2",
      "24 ounces Pasta Sauce (340 g)",
      "8 ounces Dry, Uncooked Lasagna Noodles (226 g)",
      "8 ounces Cottage Cheese",
      "5 ounces Fresh Spinach",
      "1 Zucchini, cut on cone #4",
      "1 Squash, cut on cone #4",
      "8 ounces Mushrooms, cut on cone #4",
      "2 Carrots, cut on cone #1",
      "1 Tbsp Dried Oregano",
      "2 Tsp Dried Basil",
      "4 ounces Mozzarella Cheese, cut on cone #2",
      "4 ounces Cheddar Cheese, cut on cone #2",
    ],
    instructions:
      "In electric skillet, place onion and 1/4 of the pasta sauce. Layer dry noodles over onion and sauce. Add 1 cup (226g) of cottage cheese, spreading across the noodles, making sure to cover all of the exposed noodles. Add spinach, zucchini, squash, mushrooms, and carrots. Spread across top of cottage cheese and sprinkle with oregano and basil. Add cheddar cheese, another 1/4 of the pasta sauce, and layer with dry noodles. Add remaining cup (226g) of cottage cheese, spreading across noodles, making sure to cover all of the exposed noodles. Add the remaining pasta sauce on top of cottage cheese, spreading evenly. Cover with mozzarella cheese and spread evenly across the top. Set electric skillet heat control touch pad to 325°F/163°C. When Vapo-Valve™ begins to click, reduce temperature to 200°F/93°C and set timer for 35 minutes. Let stand for 15 minutes before cutting. Serve.",
  },

  /* #3 */
  "BRAISED PORK RIBS W/ VEGETABLES": {
    recipe_image: "/images/recipes/braised-pork-ribs-with-vegetables.jpg",
    product_name: [
      "Food Processor",
      `12" Electric Oil Core Skillet`,
      "3.5 Qt Double Walled Bowl",
    ],
    product_image: [
      "/images/products/food-processor.png",
      "/images/products/12-electric-oil-core-skillet.png",
      "/images/products/3.5-qt-double-walled-bowl.png",
    ],
    ingredients: [
      "2 lbs pork ribs, boneless",
      "1 sweet potato, process, use Cone #3",
      "1 potatoes, process, use Cone #3",
      "1 carrots, process, use Cone #3",
      "1 onion, strung, use Cone #2",
      "4 baby portobello mushrooms, sliced, use Cone #4",
      "1 hot pepper, sliced",
      "1 dried red pepper, rehydrated and sliced",
      "1 spring onion, sliced, both green and white parts",
      "1 bell pepper, diced",
      "6 tbsp soy sauce",
      "2 tbsp sugar",
      "2 tbsp corn starch, dissolved in 3 tbsp of water",
      "1 tbsp rice wine vinegar",
      "1 tbsp ginger, shredded, use Cone #1",
      "1/2 tsp black pepper",
      "1 tbsp sesame oil",
      "2 tbsp garlic, shredded, use Cone #1",
      "1 tbsp hot pepper, minced",
    ],
    instructions:
      "Soak the pork ribs in cold water to remove any blood. Preheat skillet to 400 F / 200 C. Sear the ribs front and back in your skillet and remove excess oil. To make the sauce, add the soy sauce, rice wine vinegar, cornstarch, sesame oil, hot pepper, ginger, garlic, sugar and pepper to a bowl and whisk to combine. Add vegetables and sauce and combine. Cover and reduce heat to 300 F / 150 C and continue to cook. When Vapo-Valve™ begins to click steadily, reduce heat to 200 F / 95 C and cook for 30 minutes or until ribs are tender. Serve as is or over rice. Garnish with green onions.",
  },
  /* "": {
    recipe_image: "",
    product_name: "",
    product_image: "",
    ingredients: [""],
    instructions: "",
  }, */
};

export const allRecipes = Object.keys(recipes);
