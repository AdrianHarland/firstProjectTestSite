import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("react-router-dom", () => ({
  Routes: jest.fn(),
}));

describe("App component", () => {
  it("renders without crashing", () => {
    render(<App />);
  });
});
