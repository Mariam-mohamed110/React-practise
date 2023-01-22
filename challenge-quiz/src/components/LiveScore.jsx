import { React } from "react";

export default function LiveScore(props) {
  return (
    <div className="score">
      <h1>
        Lives: {props.lives} / score: {props.score}
      </h1>
    </div>
  );
}
