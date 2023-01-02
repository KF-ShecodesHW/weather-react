import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";
import Search from "./Search.js";

export default function App() {
  return <Search />;
}
<p>
  This React app is
  <a href="https://github.com/KF-ShecodesHW/weather-react">opensourced</a> and
  built by kelly faria.
</p>;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
