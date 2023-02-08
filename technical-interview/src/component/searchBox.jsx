import { React, useState } from "react";

export default function SearchBox(props) {
  const [searched, setSearched] = useState("");

  const handleInput = (e) => {
    setSearched(e.target.value);
  };

  return (
    <input
      onChange={(e) => handleInput(e)}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          console.log(e.key);
          props.handleSearched(searched);
        }
      }}
    ></input>
  );
}
