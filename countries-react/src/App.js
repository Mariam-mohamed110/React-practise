import "./App.css";
import { React, useState, useEffect } from "react";
import Appbar from "./components/AppBar";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
        setAllCountries(data);
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  // const data = Object.values(countries);
  // console.log(data);

  const handleInput = (e) => {
    // console.log(e.target.value);
    if (e.target.value) {
      const filterCountries = allCountries.filter((input) =>
        input["name"]["common"]
          .toLowerCase()
          .startsWith(e.target.value.toLowerCase())
      );
      setCountries(filterCountries);
    } else {
      setCountries(allCountries);
    }
  };

  const handleRegion = (e) => {
    console.log(e);
    if (e.target.value) {
      const filterRegions = allCountries.filter((input) =>
        input["region"].includes(e.target.value)
      );
      setCountries(filterRegions);
    } else {
      setCountries(allCountries);
    }
  };

  return (
    <div className="App">
      <Appbar />
      <SearchBar handleInput={handleInput} handleRegion={handleRegion} />
      <div style={{ width: "100%" }}>
        <CountryList countries={countries} />
      </div>
    </div>
  );
}

export default App;
