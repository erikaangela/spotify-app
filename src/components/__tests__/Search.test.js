import { render } from "@testing-library/react";
import Search from "../Search";

test("Display the Header component", () => {
  render(<Search />);
  const searchInput = screen.getByLabelText("Searchbar");
  expect(searchInput).toBeInTheDocument();
});
