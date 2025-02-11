import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home.tsx";
import TopBar from "./components/TopBar.tsx";
import History from "./History.tsx";
import Footer from "./components/Footer.tsx";
import ScrollToTop from "./utils/scrollToTop.ts";

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
      </Routes>

      <Footer />
    </BrowserRouter>
  </StrictMode>
);
