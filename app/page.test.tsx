/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("App Router: Works with Server Components", () => {
  render(<Page />);
  expect(screen.getByRole("heading")).toHaveTextContent("App Router");
});

it("Lorem ipsum dolor sit amet, consectetur adipiscing elit.", () => {
  render(<Page />);
  expect(screen.getByText("Lorem Ipsum test 1")).toBeInTheDocument();
});