// @vitest-environment jsdom
import React from "react";
import { describe, test, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";

// ----- localStorage mock (Week 4 Resource 3 pattern) -----
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};

Object.defineProperty(global, "localStorage", {
  value: localStorageMock,
});

describe("App cart state + localStorage", () => {
  beforeEach(() => {
    localStorageMock.getItem.mockReset();
    localStorageMock.setItem.mockReset();
    localStorageMock.removeItem.mockReset();
    localStorageMock.clear.mockReset();
  });

  test("renders without crashing", () => {
    localStorageMock.getItem.mockReturnValue("[]");
    render(<App />);

    // Basic sanity check that something from App renders
    expect(screen.getAllByText(/Online Craft store/i).length).toBeGreaterThan(0);
  });

  test("loads cart data from localStorage on startup", () => {
    const savedCart = JSON.stringify([
      { id: 99, name: "Saved Item", price: 10.0 },
    ]);
    localStorageMock.getItem.mockReturnValue(savedCart);

    render(<App />);

    // Your App.jsx uses this exact key
    expect(localStorageMock.getItem).toHaveBeenCalledWith("componentcorner-cart");

    // Optional: cart badge should show 1 item (depends on your Header rendering the number)
    // If your Header DOES display the number visually, this will pass:
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("saves cart to localStorage when cart changes (useEffect)", async () => {
    // Start empty cart
    localStorageMock.getItem.mockReturnValue("[]");
    render(<App />);

    // Navigate to products page
    fireEvent.click(screen.getByRole("link", { name: /products/i }));

    // Click "Add to Cart" on a product card
    // This assumes your ProductCard button text is exactly "Add to Cart"
    fireEvent.click(screen.getAllByRole("button", { name: /add to cart/i })[0]);

    // useEffect runs after cart changes, so waitFor setItem call
    await waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalled();
    });

    // Verify saved under the right key
    const lastCall = localStorageMock.setItem.mock.calls.at(-1);
    expect(lastCall[0]).toBe("componentcorner-cart");

    // Verify saved value is a JSON array containing an item
    const savedValue = lastCall[1];
    const parsed = JSON.parse(savedValue);
    expect(Array.isArray(parsed)).toBe(true);
    expect(parsed.length).toBe(1);
  });
});
