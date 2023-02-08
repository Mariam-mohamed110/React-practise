import "./App.css";
import { React, useState, useEffect } from "react";
import SearchBox from "./component/searchBox";

function App() {
  const [imageGify, setImageGify] = useState(undefined);
  const [searched, setSearched] = useState(undefined);

  const getData = async () => {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=e26089724ab941889d776827bf7c0c32&tag=${searched}`
    );
    const json = await res.json();
    console.log(json);
    setImageGify(json);
  };

  const handleSearched = (value) => {
    setSearched(value);
    getData();
  };

  return (
    <div className="App">
      <SearchBox handleSearched={handleSearched} />
      {imageGify ? (
        <img
          src={imageGify.data.images.fixed_height_downsampled.url}
          alt={imageGify.data.id}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
