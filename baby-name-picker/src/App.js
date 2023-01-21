import "./App.css";
import { React, useState } from "react";
import NameList from "./components/NameList";
import SearchInput from "./components/SearchInput";
import { babyNamesJson } from "./babyNamesData";

function App() {
  const [names, setNames] = useState(babyNamesJson);
  const [favouriteState, setFavouriteState] = useState(false);
  const [favouriteList, setFavouriteList] = useState([]);

  const typing = ({ target }) => {
    console.log(target.value);
    if (target.value) {
      const filterNames = babyNamesJson.filter((suggestion) =>
        suggestion.name.toLowerCase().startsWith(target.value.toLowerCase())
      );
      console.log(filterNames);
      setNames(filterNames);
    } else {
      setNames(babyNamesJson);
    }
  };

  const filterGender = (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "") {
      setNames(babyNamesJson);
    } else if (e.target.id) {
      const filterGender = babyNamesJson.filter((gender) =>
        gender.sex.includes(e.target.id)
      );
      setNames(filterGender);
    }
  };

  const favourite = (e) => {
    setFavouriteState(true);
    if (e.target.value === "names") {
      if (e.target.textContent) {
        const filterFavourite = resuableFilter(names, e.target.textContent);
        setFavouriteList(favouriteList.concat(filterFavourite));

        const removeFavourite = resuableNotFilter(names, e.target.textContent);
        setNames(removeFavourite);
      }
    } else if (e.target.value === "favourite") {
      if (e.target.textContent) {
        const undoFavourite = resuableNotFilter(
          favouriteList,
          e.target.textContent
        );
        setFavouriteList(undoFavourite);

        const undoName = resuableFilter(favouriteList, e.target.textContent);
        setNames(names.concat(undoName));
      }
    }
  };

  function resuableFilter(list, event) {
    return list.filter((filterName) => filterName.name.includes(event));
  }

  function resuableNotFilter(list, event) {
    return list.filter((filterName) => !filterName.name.includes(event));
  }

  return (
    <div className="container">
      <SearchInput typing={typing} filterGender={filterGender} />
      <br />
      {favouriteState ? (
        <div>
          <h3>Favourites:</h3>
          <NameList
            favourite={favourite}
            names={favouriteList}
            value="favourite"
          />
        </div>
      ) : null}
      <br />
      <NameList names={names} favourite={favourite} value="names" />
      <br />
    </div>
  );
}

export default App;
