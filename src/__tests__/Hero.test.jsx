// Hero.test.jsx
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Hero } from "./Hero";
import { describe, expect, it } from "vitest";

describe("Hero Component", () => {
  it("should render the main header text", () => {
    render(
      <Router>
        <Hero />
      </Router>
    );

    // Check if the main heading "Simplifying Livestock Boarding" is rendered
    const mainHeading = screen.getByText("Simplifying Livestock Boarding");
    expect(mainHeading).toBeInTheDocument();
  });

  it("should render the introductory paragraph", () => {
    render(
      <Router>
        <Hero />
      </Router>
    );

    // Check if the introductory text is rendered
    const introText = screen.getByText(
      "Safely and conveniently board your livestock with trusted land providers."
    );
    expect(introText).toBeInTheDocument();
  });

  it("should render the 'Join Us' and 'Detail Information' buttons", () => {
    render(
      <Router>
        <Hero />
      </Router>
    );

    // Check if the 'Join Us' button is rendered with the correct class
    const joinUsButton = screen.getByRole("button", { name: /Join Us/i });
    expect(joinUsButton).toBeInTheDocument();
    expect(joinUsButton).toHaveClass("bg-green-600");

    // Check if the 'Detail Information' button is rendered with the correct class
    const detailInfoButton = screen.getByRole("button", {
      name: /Detail Information/i,
    });
    expect(detailInfoButton).toBeInTheDocument();
    expect(detailInfoButton).toHaveClass("outline");
  });

  it("should render the background image correctly", () => {
    render(
      <Router>
        <Hero />
      </Router>
    );

    // Check if the background image is applied to the right div
    const backgroundDiv = screen.getByRole("img");
    expect(backgroundDiv).toHaveStyle(
      "background-image: url('https://images.unsplash.com/photo-1569239591652-6cc3025b07fa?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
    );
  });

  it("should render the quote text", () => {
    render(
      <Router>
        <Hero />
      </Router>
    );

    // Check if the quote is rendered correctly
    const quoteText = screen.getByText(
      "Together, we create sustainable farming through more efficient collaboration."
    );
    expect(quoteText).toBeInTheDocument();
  });

  it("should render the border under the 'Simplifying Livestock Boarding' text", () => {
    render(
      <Router>
        <Hero />
      </Router>
    );

    // Check if the border under the heading is rendered
    const borderElement = screen.getByRole("separator");
    expect(borderElement).toBeInTheDocument();
    expect(borderElement).toHaveStyle("border: 1px solid black");
  });

  it("should navigate to the register page when 'Join Us' button is clicked", () => {
    render(
      <Router>
        <Hero />
      </Router>
    );

    // Check if the 'Join Us' button navigates to the '/register' route
    const joinUsButton = screen.getByRole("button", { name: /Join Us/i });
    expect(joinUsButton.closest("a")).toHaveAttribute("href", "/register");
  });
});
