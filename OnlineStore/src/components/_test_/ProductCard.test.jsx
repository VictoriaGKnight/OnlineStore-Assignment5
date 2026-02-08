import { render, screen, fireEvent } from '@testing-library/react'
import ProductCard from '../ProductCard'


describe('ProductCard', () => {
  const mockProduct = {
    id: 1,
    name: 'Zipper pouch',
    price:12.00,
    image: 'https://placehold.co/600x400',
    description: 'High-quality, super cute hand-made zipper pouch that can hold anything!'
  }

  test("renders without crashing", () => {
    render(<ProductCard product={mockProduct} onAddToCart={() => {}} />);
  });

  test("displays product information", () => {
    render(<ProductCard product={mockProduct} onAddToCart={() => {}} />);

    expect(screen.getByText("Zipper pouch")).toBeInTheDocument();

    expect(screen.getByText("$12.00")).toBeInTheDocument();
  });

  test('contains an "Add to Cart" button', () => {
    render(<ProductCard product={mockProduct} onAddToCart={() => {}} />);

    expect(screen.getByRole("button", { name: /add to cart/i })).toBeInTheDocument();
  });

  test("clicking Add to Cart calls onAddToCart with the product", () => {
    const mockAddToCart = vi.fn();

    render(<ProductCard product={mockProduct} onAddToCart={mockAddToCart} />);

    const button = screen.getByRole("button", { name: /add to cart/i });
    fireEvent.click(button);

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
  });
});
