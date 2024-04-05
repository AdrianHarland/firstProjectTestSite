import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Cat from "./Cat";

describe("Cat Component", () => {
  it("render Cat without crashing", () => {
    render(<Cat />);
  });
});
