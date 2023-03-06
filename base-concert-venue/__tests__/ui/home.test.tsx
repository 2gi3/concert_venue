import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

test("Page has correct heading and image", () => {
  render(<Home />);

  const Heading = screen.getByRole("heading", {
    name: "Welcome to Popular Concert Venue",
  });
  expect(Heading).toBeInTheDocument();

  const image = screen.getByRole("img", {
    name: "Concert goer with hands in the shape of a heart",
  });
  expect(image).toBeInTheDocument();
});
