import React from "react";

export default function SearchInput({ typing, filterGender }) {
  return (
    <div className="search-div">
      <input className="search-input" onChange={typing}></input>
      <div>
        <input
          type="radio"
          className="name-gender-button"
          name="gender"
          id=""
          onChange={(e) => filterGender(e)}
        />
        <label htmlFor="">All genders</label>
        <input
          type="radio"
          className="name-gender-button"
          name="gender"
          id="f"
          onChange={(e) => filterGender(e)}
        />
        <label htmlFor="f">Female</label>
        <input
          type="radio"
          className="name-gender-button"
          name="gender"
          id="m"
          onChange={(e) => filterGender(e)}
        />
        <label htmlFor="m">Male</label>
      </div>
    </div>
  );
}
