// Loader.test.jsx
import { render, screen } from "@testing-library/react";
import Loader from "./Loader";
import { describe, expect, it } from "vitest";

describe("Loader Component", () => {
  it("should render the loader SVG animation", () => {
    render(<Loader />);

    // Check if the SVG element is present with the animate-bounce class
    const svgElement = screen.getByRole("img"); // Use role="img" for SVG elements
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveClass("animate-bounce");
  });

  it("should render the loading text with animation", () => {
    render(<Loader />);

    // Check if the loading text is present
    const loadingText = screen.getByText("Loading");
    expect(loadingText).toBeInTheDocument();

    // Check if the text has the 'absolute' class for animation
    const animatedText = screen.getByText("Loading");
    expect(animatedText).toHaveClass("absolute");
    expect(animatedText).toHaveClass("bg-green-500");
  });

  it("should have the correct styles applied to the container", () => {
    render(<Loader />);

    // Check if the container div has the correct classes for layout
    const loaderContainer = screen.getByTestId("loader-container");
    expect(loaderContainer).toHaveClass("flex");
    expect(loaderContainer).toHaveClass("flex-col");
    expect(loaderContainer).toHaveClass("justify-center");
    expect(loaderContainer).toHaveClass("items-center");
    expect(loaderContainer).toHaveClass("h-screen");
  });
});
