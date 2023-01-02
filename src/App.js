import logo from "./logo.svg";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world</p>
        <Weather city="Lisbon" />
        <a
          aria-label="link to this heading"
          aria-describedby="introduction"
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noreferrer"
          // eslint-disable-next-line
          alt="This is the react logo in green"
        ></a>
      </header>
    </div>
  );
}

export default App;
