import axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react";
import Country from "./components/Country";
import NewCountry from "./components/NewCountry";
import "./style.css";

function App() {
  const [countries, setCountries] = useState([
    // { id: 1, name: "United States", gold: 2, silver: 2, bronze: 3 },
    // { id: 2, name: "China", gold: 3, silver: 1, bronze: 0 },
    // { id: 3, name: "France", gold: 0, silver: 2, bronze: 2 },
  ]);

  const medals = useRef([
    { id: 1, name: "gold" },
    { id: 2, name: "silver" },
    { id: 3, name: "bronze" },
  ]);
  const dialogRef = useRef(null);

  useEffect(() => {
    axios
      .get(
        "https://khn-medal-api-a0djcyg5g6cgcdg3.canadacentral-01.azurewebsites.net/Api/country"
      )
      .then((res) => {
        if (Array.isArray(res.data)) {
          setCountries((prevCountries) => {
            // Only update state if the new data is different
            return JSON.stringify(prevCountries) !== JSON.stringify(res.data)
              ? res.data
              : prevCountries;
          });
        }
      })
      .catch((error) => console.error("Error fetching countries:", error));
  });

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

  const submitNewCountry = async (countryName) => {
    try {
      const newCountry = {
        name: countryName,
        gold: 0,
        silver: 0,
        bronze: 0,
      };

      const response = await axios.post(
        "https://khn-medal-api-a0djcyg5g6cgcdg3.canadacentral-01.azurewebsites.net/Api/country",
        newCountry
      );

      const countriesClone = [...countries];
      countriesClone.push(response.data);

      setCountries(countriesClone);
    } catch (e) {
      console.log(e);
    }
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

      <NewCountry dialogRef={dialogRef} submitNewCountry={submitNewCountry} />

      <button className="fab" onClick={() => dialogRef.current?.showModal()}>
        +
      </button>
    </div>
  );
}

export default App;
