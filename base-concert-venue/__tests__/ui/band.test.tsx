import { readFakeData } from "../__mocks__/fakeData";
import BandComponent from "@/pages/bands/[bandId]";
import { render, screen } from "@testing-library/react";

test("Band component displays correct band informations", async () => {
  const { fakeBands } = await readFakeData();
  render(<BandComponent band={fakeBands[0]} error={null} />);

  const heading = screen.getByRole("heading", {
    name: /The Wandering Bunnies/i,
  });
  expect(heading).toBeInTheDocument();
});

test("Band component displays error", () => {
  render(<BandComponent band={null} error={"Everything is fine"} />);
  const error = screen.getByRole("heading", { name: /everyting is fine/i });
  expect(error).toBeInTheDocument();
});
