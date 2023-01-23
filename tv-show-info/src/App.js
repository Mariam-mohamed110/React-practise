import "./App.css";
import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TvShowsList from "./components/all-shows/TvShowsList";
import TvShowSeasons from "./components/seasons/TvShowSeasons";

function App() {
  const [showId, setShowid] = useState(null);

  const changeId = (id) => {
    setShowid(id);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<TvShowsList changeId={changeId} />} />
        <Route path="/shows" element={<TvShowSeasons id={showId} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
