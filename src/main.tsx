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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <TopBar />

      <ScrollToTop />

      <Routes>
        {/* home */}
        <Route path="/" element={<Home />} />

        {/* history */}
        <Route path="/history" element={<History />} />

        {/* 404 */}
        <Route path="*" element={<YouAreLost />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </StrictMode>
);
