import React, { useState } from "react";
import "./Search.css";
import Input from "./Input";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => setSearchValue(e.target.value);

  const resetInputField = () => setSearchValue("");

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      <Input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <Input
        className="search-a-movie"
        onClick={callSearchFunction}
        value="SEARCH"
        type="submit"
      />
    </form>
  );
};

export default Search;
