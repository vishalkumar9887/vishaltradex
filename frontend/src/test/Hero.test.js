import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText(/hero image/i);
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", expect.stringContaining("media/images/"));
  });

  test("renders signup button", () => {
    render(<Hero />);
    // 👇 text ko actual button ke label se match kar do
    const signupButton = screen.getByRole("button", { name: /sign up/i });
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn-primary");
  });
});
