import logo from "./logo.svg";
import "./App.css";
import LiveScore from "./components/LiveScore";
import { useState, useEffect } from "react";
import Question from "./components/Question";

function App() {
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  useEffect(() => {
    const getQuestion = async () => {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=1&difficulty=easy&encode=url3986"
      );
      const json = await res.json();
      const decodedQuestion = decodeURIComponent(
        json["results"][0]["question"]
      );

      const decodedCorrectAnswer = decodeURIComponent(
        json["results"][0]["correct_answer"]
      );
      const decodedIncorrectAnswer = decodeURIComponent(
        json["results"][0]["incorrect_answers"]
      );
      const decodedAnswers = [decodedCorrectAnswer, decodedIncorrectAnswer]
        .toString()
        .split(",");

      const shuffleAnswers = decodedAnswers.sort(() => Math.random() - 0.5);

      setQuestion(decodedQuestion);
      setAnswers(shuffleAnswers);
      setCorrectAnswer(decodedCorrectAnswer);
    };
    getQuestion();
  }, [score, lives]);

  if (lives === 0) {
    alert(`You lost!\nYour score is ${score}`);
    window.location.reload(true);
  }

  const checkAnswer = (e) => {
    if (e.target.textContent === correctAnswer) {
      return setScore(score + 1);
    } else {
      return setLives(lives - 1);
    }
  };

  return (
    <div className="App">
      <LiveScore lives={lives} score={score} />
      <Question
        answers={answers}
        checkAnswer={checkAnswer}
        question={question}
      />
    </div>
  );
}

export default App;
