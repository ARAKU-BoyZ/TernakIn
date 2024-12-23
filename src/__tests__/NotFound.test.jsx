// NotFound.test.jsx
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NotFound from "./NotFound";
import { describe, expect, it } from "vitest";

describe("NotFound Component", () => {
  it("should render the 'Error' heading", () => {
    render(
      <Router>
        <NotFound />
      </Router>
    );

    // Check if the 'Error' heading is rendered correctly
    const heading = screen.getByText("Error");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("text-6xl", "font-bold");
  });

  it("should render the error image with bouncing animation", () => {
    render(
      <Router>
        <NotFound />
      </Router>
    );

    // Check if the image is rendered and has the correct animation
    const errorImage = screen.getByAltText("error image");
    expect(errorImage).toBeInTheDocument();
    expect(errorImage).toHaveClass("animate-bounce");
  });

  it("should render the error message", () => {
    render(
      <Router>
        <NotFound />
      </Router>
    );

    // Check if the error message is rendered
    const errorMessage = screen.getByText(
      "Oops! The page you're looking for doesn't exist."
    );
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveClass("text-2xl", "text-gray-600");
  });

  it("should render the 'Go Back Home' button", () => {
    render(
      <Router>
        <NotFound />
      </Router>
    );

    // Check if the 'Go Back Home' button is rendered and has the correct text
    const button = screen.getByText("Go Back Home");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "px-6",
      "py-3",
      "text-white",
      "bg-green-500",
      "rounded-lg"
    );
  });

  it("should link to the '/home' route when 'Go Back Home' button is clicked", () => {
    render(
      <Router>
        <NotFound />
      </Router>
    );

    // Check if the 'Go Back Home' button links to the /home route
    const button = screen.getByText("Go Back Home");
    expect(button.closest("a")).toHaveAttribute("href", "/home");
  });
});
