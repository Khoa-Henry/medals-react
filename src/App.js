import { useMemo, useRef, useState } from "react";
import Country from "./components/Country";

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: "United States", gold: 2, silver: 2, bronze: 3 },
    { id: 2, name: "China", gold: 3, silver: 1, bronze: 0 },
    { id: 3, name: "France", gold: 0, silver: 2, bronze: 2 },
  ]);

  const medals = useRef([
    { id: 1, name: "gold" },
    { id: 2, name: "silver" },
    { id: 3, name: "bronze" },
  ]);

  const useTotalMedals = useMemo(() => {
    const totalMedals = countries.reduce((total, country) => {
      return total + country.gold + country.silver + country.bronze;
    }, 0);
    return totalMedals;
  }, [countries]);

  const handleIncrement = (countryId, medal) => {
    setCountries((prevCountries) =>
      prevCountries.map((country) =>
        country.id === countryId
          ? { ...country, [medal]: country[medal] + 1 }
          : country
      )
    );
  };

  const handleDecrement = (countryId, medal) => {
    setCountries((prevCountries) =>
      prevCountries.map((country) =>
        country.id === countryId
          ? { ...country, [medal]: country[medal] - 1 }
          : country
      )
    );
  };

  return (
    <div>
      <h1>Olympic Medals {useTotalMedals}</h1>
      <div style={{ display: "flex" }}>
        <Country
          countries={countries}
          setCountries={setCountries}
          medals={medals}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
      </div>
    </div>
  );
}

export default App;
