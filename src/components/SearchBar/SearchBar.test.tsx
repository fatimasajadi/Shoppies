import React from "react";
import "@testing-library/jest-dom";
import { render, cleanup, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";

afterEach(cleanup);

it("renders without crashing", () => {
  const wrapper = render(
    <SearchBar value="test" onChange={() => {}} isInitial={true} />
  );

  expect(wrapper).not.toBeUndefined();
});

it("calls onChange when typing in value", () => {
  const mockOnChange = jest.fn();
  const wrapper = render(
    <SearchBar value="a" onChange={mockOnChange} isInitial={true} />
  );
  const input = wrapper.getByRole("textbox");
  userEvent.type(input, "t");

  expect(mockOnChange).toHaveBeenCalledWith("at");
});
