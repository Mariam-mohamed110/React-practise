import { React, useEffect, useState } from "react";
import Information from "./Information";

export default function Line({ mode }) {
  const [modeTransportInfo, setModeTransportInfo] = useState([]);
  const [line, setLine] = useState(undefined);

  useEffect(() => {
    const getLines = async () => {
      const res = await fetch(`https://api.tfl.gov.uk/Line/Mode/${mode}`);
      const json = await res.json();
      setModeTransportInfo(json);
    };
    getLines();
  }, [mode]);

  const handleInput = (e) => {
    setLine(e.target.value);
  };

  console.log(modeTransportInfo);

  return (
    <>
      <div>
        <select name="lines" onChange={(e) => handleInput(e)}>
          <option key={0} value="">
            Choose a Line...
          </option>
          {modeTransportInfo.map((mode, i) => {
            return (
              <option key={i + 1} value={mode.name}>
                {mode.name}
              </option>
            );
          })}
        </select>
        <p>Your selected line: {line}</p>
      </div>
      <div>{line ? <Information mode={mode} line={line} /> : <div></div>}</div>
    </>
  );
}
