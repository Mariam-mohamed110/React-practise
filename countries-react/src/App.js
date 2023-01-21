import "./App.css";
import { React, useState, useEffect } from "react";
import Appbar from "./components/AppBar";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <div className="App">
      <Appbar />
      <CountryList countries={countries} />
    </div>
  );
}

export default App;
