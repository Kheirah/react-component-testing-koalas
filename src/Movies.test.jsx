import { render, screen } from "@testing-library/react";
import Movies from "./Movies";

const movies = [
  {
    id: 1,
    name: "The Incredibles",
    isLiked: false,
  },
  {
    id: 2,
    name: "Resident Evil",
    isLiked: true,
  },
  {
    id: 3,
    name: "Lord of the React",
    isLiked: true,
  },
];

test("renders the movie list", () => {
  render(<Movies movies={movies} />);
  const incrediblesHeadline = screen.getByRole("heading", {
    name: "The Incredibles",
  });
  expect(incrediblesHeadline).toBeInTheDocument();

  const residentEvilHeadline = screen.getByRole("heading", {
    name: "Resident Evil",
  });
  expect(residentEvilHeadline).toBeInTheDocument();

  const lordHeadline = screen.getByRole("heading", {
    name: "Lord of the React",
  });
  expect(lordHeadline).toBeInTheDocument();
});
