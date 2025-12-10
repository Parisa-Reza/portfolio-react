import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./router";
// import { App } from "./App";

import "./index.css";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <StrictMode>
    <AppRouter/>
  </StrictMode>
);
