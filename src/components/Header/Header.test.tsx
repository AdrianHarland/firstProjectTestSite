import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";
import { mockRouterDom } from "../../tests/mockRouterDom";

describe("Header component", () => {
  it("renders logo and navigation links", () => {
    const { getByAltText, getByText } = render(mockRouterDom(<Header />));

    expect(getByAltText("logo")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
    expect(getByText("Images")).toBeInTheDocument();
    expect(getByText("News")).toBeInTheDocument();
    expect(getByText("Weather")).toBeInTheDocument();
    expect(getByText("Cat")).toBeInTheDocument();
    expect(getByText("Exercise")).toBeInTheDocument();
  });
});
