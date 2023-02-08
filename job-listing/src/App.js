// import "./App.css";
import { React, useEffect, useState } from "react";
import { dataFile } from "./components/data";
import JobList from "./components/JobList";

function App() {
  const [data, setData] = useState(dataFile);

  console.log(data);
  return (
    <div className="App">
      <JobList jobs={data} />
    </div>
  );
}

export default App;
