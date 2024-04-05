import React from "react";
import { useLocation } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import Home from "./Home";

describe("Home Component", () => {
  it("render Home without crashing", () => {
    const { getByText } = render(<Home />);
    expect(
      getByText("The Swamp of Shrek is available to Rent")
    ).toBeInTheDocument();
  });
});
