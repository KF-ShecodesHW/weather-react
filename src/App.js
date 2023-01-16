import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search.js";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="weather-wrapper">
          <Search />

          <div className="Detail">
            <div className="row">
              <div className="col-6">
                <div className="Temperature-image">
                  <img
                    src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/063/051/original/sun-placeholder.png?1673829550"
                    alt="Sun"
                    width="100"
                    height="100"
                  ></img>
                  <h1 className="temp">
                    <strong>25°</strong>
                  </h1>
                </div>
              </div>
              <div className="col-6">
                <div className="city-country">
                  <h3>Partially Sunny</h3>
                  <h2>
                    <strong>Toronto</strong>
                  </h2>
                  <h3>Wednesday 07:00</h3>
                </div>
              </div>

              <div className="details">
                <div className="row">
                  <div className="col-4">
                    <h4>
                      <strong>Humidity:</strong> 80%
                    </h4>
                  </div>

                  <div className="col-4">
                    <h4>
                      <strong>Precipitation:</strong> 19%
                    </h4>
                  </div>
                  <div className="col-4">
                    <h4>
                      {" "}
                      <strong>Wind:</strong> 22 km/h
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
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
