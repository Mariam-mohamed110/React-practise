import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import TvShowList from "./components/TvShowsList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<TvShowList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
