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

  /* #4 */
  "SMOKEY PORK TENDERLOIN W/ GRILLED PINEAPPLE SALSA": {
    recipe_image: "/images/recipes/smoky-pork tenderloin-with-grilled-pineapple-salsa.jpg",
    product_name: ["Smokeless Broiler", "Large Mixing Bowl"],
    product_image: ["/images/products/smokeless-broiler.png", "/images/products/3.5-qt-double-walled-bowl.png"],
    ingredients: ["1/2 cup onions, strung, use Cone #2",
      "3 cloves garlic, shredded, use Cone #1",
      "2 stalks celery, sliced, use Cone #4",
      "2 teaspoons Cajun seasoning blend",
      "3 cups cooked long-grain brown rice",
      "15 ounces diced tomatoes in juice, drained",
      "1 cup frozen okra, sliced",
      "1 pound pre-cooked shrimp, peeled and deveined",
      "1/2 teaspoon sea salt",
      "1/2 teaspoon fresh ground pepper",
      "1/4 cup fresh parsley, chopped"],
    instructions: "Preheat skillet over medium heat. When several drops of water sprinkled in skillet skitter and dissipate, add onions, garlic, and celery. Sauté for about 4 - 6 minutes until onions start to soften, stirring occasionally during cooking. Add seasoning blend, rice, tomatoes, and okra. Stir to combine. Add shrimp on top of rice mixture and cover. When Vapo-Valve™ begins to click steadily, reduce the heat to low. Cook rice for 10 minutes until everything is heated through and okra is cooked. If rice is a little watery, cook for a few additional minutes with the cover off. Taste rice and add salt and pepper as needed. Add fresh parsley right before serving and stir in to combine"
  },

  /* #5 */
  "CHICKEN & COUSCOUS": {
    recipe_image: "/images/recipes/chicken-and-couscous.jpg",
    product_name: ["Saladmaster Food Processor", "3 Qt./2.8 L Sauce Pan with Cover", `11" Large Skillet with Cover small mixing bowl`],
    product_image: ["\images\products\food-processor.png", "\images\products/3-qt-or-2.8-l-sauce-pain-with-cover.png", "\images\products/3.5-qt-double-walled-bowl.png"],
    ingredients: ["3 1/2 cups chicken stock, fat-free, low-sodium, divided (820 mL)",
      "2 cups couscous (346 g)",
      "1/4 cup raisins, packed (41 g)",
      "16 ounces chicken breast, skinless and boneless, cubed (450 g)",
      "1 carrot, cut into matchstick-size pieces, or sliced, use Cone #4",
      "1/2 cup red onion, slivered, or sliced, use Cone #4 (58 g)",
      "1/2 cup red bell pepper, julienned (46 g)",
      "2 cloves garlic, shredded, use Cone #1",
      "1 tablespoon curry powder (6 g)",
      "14 ounces artichoke hearts, drained, quartered (396 g)",
      "1 tablespoon cornstarch (15 mL)",
      "1/3 cup dry wine, or additional chicken stock (80 mL)",
      "1/2 cup yogurt, plain, nonfat (123 g)",
      "1/4 teaspoon black pepper (0.5 g)",
      "2 tablespoons flat-leaf parsley (8 g)"],
    instructions: "Place 3 cups of chicken stock in saucepan and bring to a rolling boil. Remove from heat and add couscous and raisins. Stir to mix, cover and let stand for 10 minutes. Fluff with fork and transfer to large platter or large heated bowl. Meanwhile, preheat skillet over medium heat. When several drops of water sprinkled on the pan skitter and dissipate, place chicken in pan. Cook for approximately 4 minutes until no longer pink, stirring frequently. Add carrot, onion, bell pepper, garlic and curry powder. Stir for additional 2 minutes. Arrange artichokes on top, cover and cook until Vapo-Valve™ clicks. Reduce heat to low and cook 3 minutes, until carrots and pepper are crisp-tender. Using slotted spoon, remove chicken and vegetables and arrange on top of couscous. Cover and keep warm. In small bowl, dissolve cornstarch in remaining 1/2 cup (120 mL) chicken stock. Stir into drippings in skillet. Add wine, cook and stir over medium-low heat until thickened and smooth. Stir in yogurt and pepper. Stir until heated through. Spoon hot sauce over chicken and vegetables, top with parsley and serve.",
  },

  /* #6 */
  "FRUIT SALAD": {
    recipe_image: "/images\recipes\fruit-salad.jpg",
    product_name: "Food Processor",
    product_image: "\images\products\food-processor.png",
    ingredients: ["2 cantaloupes, sliced, use Cone #3",
      "1 honeydew melon, sliced, use Cone #3",
      "1 small watermelon, seedless, use Cone #4",
      "10 strawberries, sliced, use Cone #3",
      "6 kiwis, peeled and sliced, use Cone #4",
      "1 orange, juiced",
      "1/2 orange zest, shredded, use Cone #1",
      "1 pint blueberries"],
    instructions: "Use a knife to slice whole watermelon in half. Then slice each half into 3 or 4 equal sections. Do the same with the honeydew, and cantaloupe melons. Remove the food guide from Food Processor. Process honeydew and cantaloupe using No. 3 cone. Then place strawberries in hopper of Food Processor to process using No. 3 cone. Using a knife, take each piece of watermelon and apply 3 horizontal cuts of equal width (see video). Process watermelon and kiwi using No. 4 cone. Using No. 1 cone, grate zest from orange. Add blueberries and freshly squeezed orange juice. Combine ingredients well and chill until ready to serve. Enjoy!",
  },

  /* #7 */
  "CAJUN RICE & SHRIMP": {
    recipe_image: "\images\recipes\cajun-rice-and-shrimp.jpg",
    product_name: ["Food Processor", `12" Chef's Gourmet Skillet`],
    product_image: [""],
    ingredients: ["1/2 cup onions, strung, use Cone #2 (80 g)",
      "3 cloves garlic, shredded, use Cone #1",
      "2 stalks celery, sliced, use Cone #4",
      "2 teaspoons Cajun seasoning blend (6 g)",
      "3 cups cooked long-grain brown rice (585 g)",
      "15 ounces diced tomatoes in juice, drained (425 g)",
      "1 cup frozen okra, sliced (112 g)",
      "1 pound pre-cooked shrimp, peeled and deveined (454 g)",
      "1/2 teaspoon sea salt (3 g)",
      "1/2 teaspoon fresh ground pepper (1 g)",
      "1/4 cup fresh parsley, chopped (15 g)"],
    instructions: "Preheat skillet over medium heat. When several drops of water sprinkled in skillet skitter and dissipate, add onions, garlic, and celery. Sauté for about 4 - 6 minutes until onions start to soften, stirring occasionally during cooking. Add seasoning blend, rice, tomatoes, and okra. Stir to combine. Add shrimp on top of rice mixture and cover. When Vapo-Valve™ begins to click steadily, reduce the heat to low. Cook rice for 10 minutes until everything is heated through and okra is cooked. If rice is a little watery, cook for a few additional minutes with the cover off. Taste rice and add salt and pepper as needed. Add fresh parsley right before serving and stir in to combine.",
  },

  /* #8 */
  "UNFRIED CHICKEN": {
    recipe_image: "",
    product_name: [`12" Electric Oil Core Skillet`],
    product_image: "",
    ingredients: ["12 chicken thighs, boneless, skinless"],
    instructions: "Preheat the electric skillet to 450°F/230°C. Place chicken in skillet; it will initially stick. Place cover on skillet, leaving the lid ajar. This will allow air to flow through the cookware creating a crispy, fried chicken (as opposed to the baking method). When the chicken loosens from the skillet, approximately 10 - 15 minutes (the length of time depends on the size of the chicken), turn and cook another 10 - 15 minutes. Optional: Season the hot chicken with desired seasonings once removed from the skillet.",
  },

  /* #9 */
  "ORANGE GINGER STIR-FRY": {
    recipe_image: "",
    product_name: ["Saladmaster Food Processor", "5 Qt./4.7 L Gourmet Wok with Cover", "mixing bowl."],
    product_image: "",
    ingredients: ["ENTREE:", "24 ounces chicken tenders (340 g)",
      "1 bunch broccoli, stalks, florets whole, processed, use Cone #3",
      "1 red bell pepper, julienned",
      "2 medium carrots, processed, use Cone #3",
      "1 large onion, processed, use Cone #3",
      "2 - 3 cloves garlic, shredded, use Cone #1",
      "1/3 cup almonds, toasted and strung, use Cone #2, optional (31 g)",
      "",
      "ORANGE SAUCE",
      "1/3 cup orange juice (80 mL)",
      "1/3 cup soy sauce (80 mL)",
      "1 tablespoon honey or agave nectar (15 mL)",
      "1/4 teaspoon ground ginger (1.25 mL)",
      "1/2 cup chicken stock (120 mL)",
      "2 tablespoons cornstarch (30 mL)",
      "1/4 cup water (60 mL)"],
    instructions: "Preheat wok over medium heat. When several drops of water sprinkled on pan skitter and dissipate, add chicken. Cover, stirring occasionally, and cook approximately 8 - 10 minutes. Chicken should not be pink. Add broccoli, pepper, carrots, onion, and garlic. Stir together, cover, and cook until vegetables are crisp-tender, approximately 10 minutes. In a medium bowl, mix all Orange Sauce ingredients through chicken stock. In a small bowl, mix cornstarch and water. Stir until well blended. Add to other Orange Sauce ingredients and blend. Pour sauce over vegetables and chicken in wok, stirring. Cook uncovered until thickened, approximately 4 - 5 minutes. Serve with rice or noodles. Sprinkle with toasted almonds."
  },

  /* #10 */

  "LEMON GARLIC SHRIMP AND QUINOA": {
    recipe_image: '11" Large Skillet with Cover.',
    product_name: ['11" Large Skillet with Cover'],
    product_image: "",
    ingredients: ["1 lb raw, tail-on shrimp, peeled and deveined (1/2 kg)",
      "1 tsp salt (optional) (6 g)",
      "1/2 tsp chili powder, divided (1 1/3 g)",
      "1/3 cup yellow onion, use Cone #2 (53 g)",
      "3 garlic cloves, minced",
      "1 cup quinoa, uncooked (170 g)",
      "1/4 tsp cayenne pepper (1/2 g)",
      "2 cups chicken stock, low sodium (475 ml)",
      "1/2 tsp lemon zest (1 g)",
      "1 tbsp lemon juice (14 ml)",
      "3 tbsp fresh parsley"],
    instructions: "Preheat skillet over medium-high heat until several drops of water sprinkled in pan skitter and dissipate, approximately 5 minutes. Add shrimp to skillet and season with salt and half of the chili powder. Cover and cook for 3 minutes, or until shrimp is pink throughout. Once cooked, remove from the skillet and set aside. Add the onion and garlic to the skillet. Cover and cook until onions are translucent, approximately 4 minutes. Add the uncooked quinoa, cayenne, chili powder, and chicken stock to the skillet and combine. Cover and cook for 12 minutes. Fluff quinoa with fork once it has cooked through. Add parsley, lemon zest, and lemon juice and combine. Add in cooked shrimp and cover for 2 minutes until shrimp has warmed throughout.",
  },

  /* #11 */
  "TRIPLE CHOCOLATE CHEESECAKE": {
    recipe_image: "",
    product_name: ["Saladmaster Food Processor", '12\" Electric Oil Core Skillet'],
    product_image: "",
    ingredients: [" CRUST*:",
   "1 cup hazelnuts, shredded, use Cone #1",
  "3 tbsp butter, shredded, freeze and use Cone #1",
  "1 tsp erythritol sweetener",
  "1 tbsp unsweetened cocoa powder",
  "",
"CHEESECAKE FILLING*:",
"28 oz cream cheese, softened",
  "1/2 cup sour cream",
  "2 whole eggs",
  "1/4 cup heavy whipping cream",
  "1/2 cup erythritol sweetener",
  "1 cup unsweetened dark chocolate chips, melted",
  "3 tbsp unsweetened cocoa powder",
  "",
"CHOCOLATE GANACHE",
"1/2 cup unsweetened dark chocolate chips",
  "3 tbsp heavy whipping cream",
  "1/8 tsp erythritol sweetener",
  "Hazelnuts, shredded, use Cone #1 (topping)"],
    instructions: "Using your Food Processor, shred the hazelnuts and the frozen butter using Cone #1. Combine until crumbly. Add the mixture to the skillet and press out with your hands to create an even layer in the skillet to form your crust. In a large bowl, add all of your cheesecake filling ingredients and combine. This step will be according to your preference. You can whisk the mixture until it's a smooth consistency or leave it chunky to create cream cheese chunks throughout the cheesecake. Once combined, add the mixture over the crust and evenly distribute throughout the skillet and cover. Set temperature to 250°F/120°C and cook for 2 hours. Turn off the skillet and place it in the refrigerator to chill for 1-2 hours to set before serving. This will vary depending on your refrigerator cooling settings.",
  },

  /* #12 */
  "CHOCOLATE BROWNIE CAKE": {
    recipe_image: "",
    product_name: ["Saladmaster Food Processor", '9\" Small Skillet with Cover'],
    product_image: "",
    ingredients: ["1 medium apple, shredded, use Cone #2",
  "8 oz dark chocolate, chopped",
  "1 cup almond or oat meal",
  "3 tbsp unsweetened cocoa powder",
  "1/4 tsp baking powder",
  "1/4 tsp salt (optional)",
  "1 cup Stevia plant-based sweetener",
  "4 large eggs",
  "1 1/2 tsp vanilla extract",
  "1 cup walnuts, whole or chopped, use Cone #5",
  "2 tbsp coconut oil for basting"],
    instructions: "Add chocolate to the saucepan and cover. Set temperature on low heat to melt. In a bowl, add apple, meal, unsweetened cocoa powder, and sweetener. Mix well. After mixing, add vanilla extract, eggs, baking soda, walnuts, and melted chocolate. Mix well. Using your hand, baste the skillet with coconut oil and pour the cake mix into the skillet and cover. Set heat on medium-low and cook for 25 to 30 minutes. Remove skillet from the stove and keep covered. Serve warm or allow cake to cool completely.",
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
