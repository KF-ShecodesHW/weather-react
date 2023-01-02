import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";
import Search from "./Search.js";

export default function App() {
  return <Search />;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
