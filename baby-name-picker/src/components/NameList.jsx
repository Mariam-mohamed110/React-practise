import { React, useState, useEffect } from "react";
import BabyNames from "./BabyName";

export default function NameList(props) {
  const [names, setSortNames] = useState([]);

  useEffect(() => {
    handleSort();
  }, []);

  function handleSort() {
    const sortedName = [...names].sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
    setSortNames(sortedName);
  }

  const listOfNames = props.names.map((name) => {
    return (
      <BabyNames
        key={name.id}
        name={name.name}
        sex={name.sex}
        favourite={props.favourite}
      />
    );
  });

  return <div className="list-of-names">{listOfNames}</div>;
}
