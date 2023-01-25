import "./App.css";
import ModeTransport from "./components/ModeTransport";
import { React, useState, useEffect } from "react";

function App() {
  const [tfl, setTfl] = useState([]);

  useEffect(() => {
    const getTfl = async () => {
      const res = await fetch("https://api.tfl.gov.uk/Line/Meta/Modes");
      const json = await res.json();
      setTfl(json);
      console.log(json);
    };
    getTfl();
  }, []);

  return (
    <div className="App">
      <h1>Transport for London Line information</h1>
      <ModeTransport transport={tfl} />
    </div>
  );
}

export default App;
