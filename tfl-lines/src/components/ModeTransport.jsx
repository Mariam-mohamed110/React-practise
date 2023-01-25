import { React, useState, useEffect } from "react";
import Line from "./Line";

export default function ModeTransport({ transport }) {
  const [modeOfTransport, setModeOfTransport] = useState(undefined);

  const handleInput = (e) => {
    setModeOfTransport(e.target.value);
  };

  return (
    <>
      <div>
        <select name="mode-of-transport" onChange={(e) => handleInput(e)}>
          <option key={0} value="">
            Choose a Mode Of Transport...
          </option>
          {transport.map((mode, i) => {
            return (
              <option key={i + 1} value={mode.modeName}>
                {mode.modeName}
              </option>
            );
          })}
        </select>

        <p>Your selected mode: {modeOfTransport}</p>
      </div>
      <div>
        {modeOfTransport ? <Line mode={modeOfTransport} /> : <div></div>}
      </div>
    </>
  );
}
