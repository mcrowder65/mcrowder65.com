import React from "react";
import { render } from "@testing-library/react";
import { Twitter, GitHub } from "../social";

test("that twitter renders", () => {
  render(<Twitter />);
});

test("that github renders", () => {
  render(<GitHub />);
});
