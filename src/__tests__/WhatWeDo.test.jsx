// WhatWeDo.test.jsx
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import WhatWeDo from "../components/WhatWeDo";
import { describe, expect, it } from "vitest";

describe("WhatWeDo Component", () => {
  it("should render the Hero section", () => {
    render(
      <Router>
        <WhatWeDo />
      </Router>
    );

    // Check if the "Building Trust, Caring for Tomorrow" text is rendered
    const heroText = screen.getByText("Building Trust,");
    expect(heroText).toBeInTheDocument();

    const heroSubText = screen.getByText("Caring for Tomorrow.");
    expect(heroSubText).toBeInTheDocument();
  });

  it("should render the introductory paragraph", () => {
    render(
      <Router>
        <WhatWeDo />
      </Router>
    );

    // Check if the introductory text is rendered
    const introText = screen.getByText(
      "At TernakIn, we understand the importance of safe, comfortable, and reliable livestock boarding."
    );
    expect(introText).toBeInTheDocument();
  });

  it("should render the header text with the right partnership message", () => {
    render(
      <Router>
        <WhatWeDo />
      </Router>
    );

    // Check if the partnership header texts are rendered
    const partnershipText = screen.getByText("Rooted in Partnership");
    expect(partnershipText).toBeInTheDocument();

    const sustainableText = screen.getByText(
      "Sustainable Livestock Management"
    );
    expect(sustainableText).toBeInTheDocument();
  });

  it("should render the 'What we do' section", () => {
    render(
      <Router>
        <WhatWeDo />
      </Router>
    );

    // Check if the "What we do" heading is rendered
    const sectionTitle = screen.getByText("What we do");
    expect(sectionTitle).toBeInTheDocument();

    // Check if the description text is rendered
    const sectionDescription = screen.getByText(
      "We offer a range of services to support livestock owners in managing and caring for their animals efficiently."
    );
    expect(sectionDescription).toBeInTheDocument();
  });

  it("should render the 'All Services' button", () => {
    render(
      <Router>
        <WhatWeDo />
      </Router>
    );

    // Check if the button is rendered with the correct text
    const button = screen.getByText("All Services");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-green-800", "hover:bg-green-900");
  });

  it("should render the service cards", () => {
    render(
      <Router>
        <WhatWeDo />
      </Router>
    );

    // Check if the service cards are rendered
    const cardTitles = [
      "Trusted Boarding",
      "Health Monitoring",
      "Resource Management",
    ];

    cardTitles.forEach((title) => {
      const cardTitle = screen.getByText(title);
      expect(cardTitle).toBeInTheDocument();
    });

    // Check if the images inside the cards are rendered
    const cardImages = screen.getAllByRole("img");
    expect(cardImages.length).toBe(3); // Three cards should have images
  });

  it("should render the footer with the correct links", () => {
    render(
      <Router>
        <WhatWeDo />
      </Router>
    );

    // Check if the footer contains the "About Us" link
    const aboutUsLink = screen.getByText("About Us");
    expect(aboutUsLink).toBeInTheDocument();
    expect(aboutUsLink).toHaveAttribute("href", "/about");

    // Check if the footer contains the "ternakIn" text
    const brandText = screen.getByText("ternakIn");
    expect(brandText).toBeInTheDocument();

    // Check if the footer contains the copyright text
    const copyrightText = screen.getByText("©2024");
    expect(copyrightText).toBeInTheDocument();
  });
});
