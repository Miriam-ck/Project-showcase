import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectForm from "../components/ProjectForm";

test("submits title and description", async () => {
  const onAdd = vi.fn();
  render(<ProjectForm onAdd={onAdd} />);
  await userEvent.type(screen.getByLabelText("Title"), "My App");
  await userEvent.type(screen.getByLabelText("Description"), "Cool");
  await userEvent.click(screen.getByRole("button", { name: "Add" }));
  expect(onAdd).toHaveBeenCalledWith("My App", "Cool");
});

test("shows an error when title is empty", async () => {
  render(<ProjectForm onAdd={vi.fn()} />);
  await userEvent.click(screen.getByRole("button", { name: "Add" }));
  expect(screen.getByRole("alert")).toHaveTextContent("Title is required");
});
