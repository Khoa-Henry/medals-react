import { useRef, useState } from "react";
import Country from "./components/Country";

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: "United States", gold: 2 },
    { id: 2, name: "China", gold: 3 },
    { id: 3, name: "France", gold: 0 },
  ]);
  const medals = useRef([
    { id: 1, name: "gold" },
    { id: 2, name: "silver" },
    { id: 3, name: "bronze" },
  ]);

  return (
    <div style={{ display: "flex" }}>
      <Country
        countries={countries}
        setCountries={setCountries}
        medals={medals}
      />
    </div>
  );
}

export default App;
