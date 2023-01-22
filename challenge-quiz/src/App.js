import logo from "./logo.svg";
import "./App.css";
import LiveScore from "./components/LiveScore";
import { useState, useEffect } from "react";
import Question from "./components/Question";

function App() {
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <LiveScore lives={lives} score={score} />
      <Question />
    </div>
  );
}

export default App;
