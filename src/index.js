import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ContextProvider } from "./context";

const root = document.getElementById("root");
const app = createRoot(root);
app.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
