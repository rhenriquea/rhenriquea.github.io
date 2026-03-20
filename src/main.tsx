import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.scss";

// Activate preloaded Google Fonts stylesheet (avoids inline onload handler for CSP)
const fontLink = document.querySelector('link[rel="preload"][as="style"]');
if (fontLink) {
  fontLink.setAttribute("rel", "stylesheet");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
