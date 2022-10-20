import { queryByTestId, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "../Search";

test("complete basic test", () => {
  render(<Search />);
  expect(true).toBe(true);
});
