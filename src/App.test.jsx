import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Testing the App component", () => {
  it("should contain the heading 'React Component Testing'", async () => {
    render(<App />);
    const heading = await screen.findByText("React Component Testing");
    expect(heading).toBeInTheDocument();
  });
});
