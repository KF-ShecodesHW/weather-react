import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search.js";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Search />
        <p>
          This React app is
          <a href="https://github.com/KF-ShecodesHW/weather-react">
            {" "}
            open sourced
          </a>{" "}
          and built by kelly faria.
        </p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
