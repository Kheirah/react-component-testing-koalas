import { render, screen } from "@testing-library/react";
import Movies from "./Movies";

const movies = [
  {
    id: 1,
    title: "Hulky Hulk - Smash",
    isLiked: true,
  },
  {
    id: 2,
    title: "Spiderman - The Web Slinger",
    isLiked: true,
  },
  {
    id: 3,
    title: "Ironman - The Genius",
    isLiked: false,
  },
  {
    id: 4,
    title: "Captain America - The First Avenger",
    isLiked: false,
  },
];

test("renders the movie list", () => {
  render(<Movies movies={movies} />);
  const headlineHulk = screen.getByRole("heading", {
    name: "Hulky Hulk - Smash",
  });
  expect(headlineHulk).toBeInTheDocument();

  const headlineSpider = screen.getByRole("heading", {
    name: "Spiderman - The Web Slinger",
  });
  expect(headlineSpider).toBeInTheDocument();

  const headlineIronman = screen.getByRole("heading", {
    name: "Ironman - The Genius",
  });
  expect(headlineIronman).toBeInTheDocument();

  const headlineCaptain = screen.getByRole("heading", {
    name: "Captain America - The First Avenger",
  });
  expect(headlineCaptain).toBeInTheDocument();
});
