import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

const setup = () => render(<MemoryRouter><App /></MemoryRouter>);

test("adds a new project to the list", async () => {
  setup();
  await userEvent.type(screen.getByLabelText("Title"), "Weather App");
  await userEvent.click(screen.getByRole("button", { name: "Add" }));
  expect(screen.getByText("Weather App")).toBeInTheDocument();
});

test("search filters projects", async () => {
  setup();
  await userEvent.type(screen.getByLabelText("Search Projects"), "Project 2");
  expect(screen.getByText("Project 2")).toBeInTheDocument();
  expect(screen.queryByText("Project 1")).not.toBeInTheDocument();
});
