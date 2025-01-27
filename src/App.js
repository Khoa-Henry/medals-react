import { useState } from "react";
import Country from "./components/Country";

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: "United States", gold: 2 },
    { id: 2, name: "China", gold: 3 },
    { id: 3, name: "France", gold: 0 },
  ]);

  return (
    <div style={{ display: "flex" }}>
      <Country countries={countries} setCountries={setCountries} />
    </div>
  );
}

export default App;
