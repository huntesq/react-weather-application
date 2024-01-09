import "./Weather.css";
import "./App.css";
import Weather from "./Weather.js";
import "./index.js";

function App() {
  return (
    <div className="Container">
      <Weather defaultCity="Pretoria" />
    </div>
  );
}

export default App;
