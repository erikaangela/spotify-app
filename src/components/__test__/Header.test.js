import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Header from "../Header.js";

test("Display the Header component", () => {
  render(<Header />);
});
