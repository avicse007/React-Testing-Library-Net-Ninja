import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const MockApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

test("check render followers  link", () => {
  render(<MockApp />);
  const elementLink = screen.getByText("Followers");
  expect(elementLink).toBeInTheDocument();
});
