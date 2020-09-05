import React from "react";

import "./SearchBar.css";

interface Props {
  value: string;
  onChange(value: string): void;
}

function SearchBar({ value, onChange }: Props) {
  return (
    <div className="search-bar">
      <input
        placeholder="Movie title..."
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
