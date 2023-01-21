import React from "react";

export default function BabyNames(props) {
  const babySex = (sex) => {
    let genderClass;
    if (sex === "f") {
      genderClass = "female-box";
    } else if (sex === "m") {
      genderClass = "male-box";
    }
    return genderClass;
  };

  return (
    <button
      className={babySex(props.sex)}
      value={props.value}
      key={props.id}
      onClick={(e) => props.favourite(e)}
    >
      {props.name}
    </button>
  );
}
