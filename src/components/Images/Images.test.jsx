import Images from "./Images";
import { render } from "@testing-library/react";

describe("Image component", () => {
  //   const images = ["image.jpeg", "image2.jpeg", "image3.jpeg"];
  it("render Images without crashing", () => {
    const { getByText } = render(<Images />);
    expect(getByText("hello")).toBeInTheDocument();
  });
});
