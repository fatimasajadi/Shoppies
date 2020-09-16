import React from "react";
import { render, cleanup } from "@testing-library/react";
import SearchBar from "../SearchBar";

afterEach(cleanup);

it("renders without crashing", () => {
  const wrapper = render(
    <SearchBar value="test" onChange={() => {}} isInitial={true} />
  );

  expect(wrapper).not.toBeUndefined();
});
