import React from "react";
import { render, cleanup } from "@testing-library/react";
import SearchBar from "../src/components/SearchBar/SearchBar";

// afterEach(cleanup);

it("renders without crashing", () => {
  const wrapper = render(
    <SearchBar value="salam" onChange={() => {}} isInitial={true} />
  );

  expect(wrapper).not.toBeUndefined();
});
