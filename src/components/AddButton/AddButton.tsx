import React from "react";
import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";

import "./AddButton.css";

interface Props {
  onClick(): void;
  added?: boolean;
}

function AddButton({ onClick, added = true }: Props) {
  return (
    <button className={`add-button ${added ? "added" : ""}`} onClick={onClick}>
      <AddIcon />
      <span className="additional-text">Nominate</span>
    </button>
  );
}

export default AddButton;
