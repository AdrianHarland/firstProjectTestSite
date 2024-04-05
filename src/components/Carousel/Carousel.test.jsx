import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

describe("Carousel Component", () => {
  const images = ["image.jpeg", "image2.jpeg", "image3.jpeg"];
  it("render Carousel without crashing", () => {
    render(<Carousel images={images} />);
  });
  it("Should got to next slide on next click", () => {
    const { getByText, getByAltText } = render(<Carousel images={images} />);
    const nextButton = getByText(">");
    fireEvent.click(nextButton);
    const image = getByAltText("Carousel Slide");
    expect(image.src).toContain(images[1]);
  });

  it("Should got through all slides on next clicks", () => {
    const { getByText, getByAltText } = render(<Carousel images={images} />);
    const nextButton = getByText(">");
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    const image = getByAltText("Carousel Slide");
    expect(image.src).toContain(images[0]);
  });

  it("Should got to prev slide on prev click", () => {
    const { getByText, getByAltText } = render(<Carousel images={images} />);
    const prevButton = getByText("<");
    fireEvent.click(prevButton);
    const image = getByAltText("Carousel Slide");
    expect(image.src).toContain(images[2]);
  });
  it("Should got to next slide on next click and previous on prev click", () => {
    const { getByText, getByAltText } = render(<Carousel images={images} />);
    const nextButton = getByText(">");
    const prevButton = getByText("<");
    fireEvent.click(nextButton);
    fireEvent.click(prevButton);
    const image = getByAltText("Carousel Slide");
    expect(image.src).toContain(images[0]);
  });
});
