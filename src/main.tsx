import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { App } from "./App";

import "../src/app/utils/lazy-with-reload";
import "../src/app/lib/sentry";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
