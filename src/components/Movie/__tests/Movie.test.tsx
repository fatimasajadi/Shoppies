import React from "react";
import { render, cleanup } from "@testing-library/react";
import Movie from "../Movie";
import { Type } from "../../../utils/api";

afterEach(cleanup);

it("renders without crashing", () => {
  const wrapper = render(
    <Movie
      key={1}
      maxedOut={true}
      movie={{
        Poster: "test",
        Year: "test",
        imdbID: "2",
        Title: "test",
        Type: Type.Movie,
      }}
      onAdd={() => {}}
      onRemove={() => {}}
      added
    />
  );

  expect(wrapper).not.toBeUndefined();
});
