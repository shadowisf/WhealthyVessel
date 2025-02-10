import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home.tsx";
import TopBar from "./components/TopBar.tsx";
import History from "./History.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <TopBar />

      <Routes>
        {/* home */}
        <Route path="/" element={<Home />} />

        {/* history */}
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
