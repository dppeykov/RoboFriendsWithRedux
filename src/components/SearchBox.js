import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="tc pa3 ba b--green bg-washed-yellow"
        type="search"
        placeholder="Search for robots ..."
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
