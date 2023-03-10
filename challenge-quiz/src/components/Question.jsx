import { React } from "react";

export default function Question({ answers, checkAnswer, question }) {
  //   const [question, setQuestion] = useState("");
  //   const [answers, setAnswers] = useState([]);
  //   const [correctAnswer, setCorrectAnswer] = useState("");

  //   useEffect(() => {
  //     const getQuestion = async () => {
  //       const res = await fetch(
  //         "https://opentdb.com/api.php?amount=1&difficulty=easy&encode=url3986"
  //       );
  //       const json = await res.json();
  //       const decodedQuestion = decodeURIComponent(
  //         json["results"][0]["question"]
  //       );

  //       const decodedCorrectAnswer = decodeURIComponent(
  //         json["results"][0]["correct_answer"]
  //       );
  //       const decodedIncorrectAnswer = decodeURIComponent(
  //         json["results"][0]["incorrect_answers"]
  //       );
  //       const decodedAnswers = [decodedCorrectAnswer, decodedIncorrectAnswer]
  //         .toString()
  //         .split(",");

  //       const shuffleAnswers = decodedAnswers.sort(() => Math.random() - 0.5);

  //       setQuestion(decodedQuestion);
  //       setAnswers(shuffleAnswers);
  //       setCorrectAnswer(decodedCorrectAnswer);
  //     };
  //     getQuestion();
  //   }, []);

  //   const checkAnswer = (e) => {
  //     if (e.target.textContent === correctAnswer) {
  //       return score++;
  //     } else {
  //       return lives++;
  //     }
  //   };

  const buttons = answers.map((answer, index) => {
    return (
      <button key={index} onClick={(e) => checkAnswer(e)}>
        {answer}
      </button>
    );
  });

  return (
    <div className="question-answer">
      <h4>{question}</h4>
      {buttons}
    </div>
  );
}
