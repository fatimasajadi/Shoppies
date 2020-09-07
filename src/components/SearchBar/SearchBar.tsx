import React from "react";

import "./SearchBar.css";

interface Props {
  value: string;
  onChange(value: string): void;
  isInitial: boolean;
}

function SearchBar({ value, onChange, isInitial }: Props) {
  return (
    <div className={`search-bar ${isInitial ? "initial" : ""}`}>
      <input
        placeholder="Start typing your favorite movie name..."
        autoFocus
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
