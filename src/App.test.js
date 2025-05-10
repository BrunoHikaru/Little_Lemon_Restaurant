import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../src/Components/ui/BookingForm";

test("BookingForm can be submitted by the user", () => {
  const mockDispatch = jest.fn();
  const mockTimes = ["17:00", "18:00", "19:00"];

  // Spy on console.log to check form submission
  const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  render(<BookingForm availableTimes={mockTimes} dispatch={mockDispatch} />);

  // Fill in the form
  fireEvent.change(screen.getByLabelText(/Choose date/i), {
    target: { value: "2025-05-12" },
  });

  fireEvent.change(screen.getByLabelText(/Choose time/i), {
    target: { value: "18:00" },
  });

  fireEvent.change(screen.getByLabelText(/Number of guests/i), {
    target: { value: "3" },
  });

  fireEvent.change(screen.getByLabelText(/First Name/i), {
    target: { value: "John" },
  });

  fireEvent.change(screen.getByLabelText(/Last Name/i), {
    target: { value: "Doe" },
  });

  fireEvent.change(screen.getByLabelText(/Phone Number/i), {
    target: { value: "1234567890" },
  });

  fireEvent.change(screen.getByLabelText(/Email/i), {
    target: { value: "john@example.com" },
  });

  fireEvent.change(screen.getByLabelText(/Additional Notes/i), {
    target: { value: "Window seat please." },
  });

  // Submit the form
  fireEvent.click(screen.getByRole("button", { name: /Make your reservation/i }));

  // Expect form data to be logged
  expect(consoleSpy).toHaveBeenCalledWith("Submitted:", {
    date: "2025-05-12",
    time: "18:00",
    guests: "3",
    occasion: "Birthday",
    firstName: "John",
    lastName: "Doe",
    phone: "1234567890",
    email: "john@example.com",
    notes: "Window seat please.",
  });

  // Clean up the spy
  consoleSpy.mockRestore();
});
