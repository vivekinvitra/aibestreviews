import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../App";

// Hydrate if pre-rendered, otherwise render normally
const rootElement = document.getElementById("root") as HTMLElement;

if (rootElement.hasChildNodes()) {
  // Pre-rendered content exists, hydrate it
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // No pre-rendered content, render normally (dev mode)
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
