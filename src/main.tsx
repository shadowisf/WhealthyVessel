import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import TopBar from "./components/TopBar.tsx";
import History from "./pages/History.tsx";
import Footer from "./components/Footer.tsx";
import ScrollToTop from "./utils/scrollToTop.ts";
import YouAreLost from "./pages/YouAreLost.tsx";
import Recipes from "./pages/Recipes.tsx";
import { allRecipes, recipes } from "./utils/GODMODE.ts";
import RecipeTemplate from "./components/RecipeTemplate.tsx";
import Products from "./pages/Products.tsx";
import Login from "./pages/Login.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <TopBar />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/history" element={<History />} />

        <Route path="/recipes" element={<Recipes />} />

        <Route path="/products" element={<Products />} />

        <Route path="/login" element={<Login />} />

        {allRecipes.map((recipe) => {
          const cleanName = recipe.replace(/ /g, "-").toLowerCase();

          return (
            <Route
              key={recipe}
              path={`/recipes/${cleanName}`}
              element={
                <RecipeTemplate
                  recipe_name={recipe}
                  recipe_image={recipes[recipe].recipe_image}
                  product_name={recipes[recipe].product_name}
                  product_image={recipes[recipe].product_image}
                  ingredients={recipes[recipe].ingredients}
                  instructions={recipes[recipe].instructions}
                />
              }
            />
          );
        })}

        <Route path="*" element={<YouAreLost />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </StrictMode>
);
