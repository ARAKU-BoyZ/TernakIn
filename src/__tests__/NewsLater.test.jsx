// NewsLater.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import { NewsLater } from "./NewsLater";
import { describe, expect, it } from "vitest";
import { jest } from "globals";

describe("NewsLater Component", () => {
  it("should render the email input field", () => {
    render(<NewsLater />);

    // Check if the input element is in the document
    const emailInput = screen.getByPlaceholderText("Your email address");
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute("type", "email");
  });

  it("should render the join now button", () => {
    render(<NewsLater />);

    // Check if the button is present and has correct text
    const button = screen.getByText("Join Now");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-green-600");
  });

  it("should have a background image applied", () => {
    render(<NewsLater />);

    // Check if the section has the correct background image URL
    const section = screen.getByRole("region");
    expect(section).toHaveStyle(
      "background-image: url('https://images.unsplash.com/photo-1633616669488-d17df6d759a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxmYXJtZXIlMjB3aXRoJTIwY293fGVufDB8fDB8fHww')"
    );
  });

  it("should call the onSubmit function when the form is submitted", () => {
    render(<NewsLater />);

    // Mock a submit handler
    const mockSubmit = jest.fn();
    const form = screen.getByRole("form");

    form.onsubmit = mockSubmit;

    // Trigger form submit
    fireEvent.submit(form);
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});
