import { render, screen, fireEvent } from '@testing-library/react';
import CartItem from '../CartItem';

describe('CartItem', () => {
  const mockItem = {
    id: 1,
    name: 'Zipper pouch',
    price: 12.00,
  };

  test('renders without crashing', () => {
    render(<CartItem item={mockItem} onRemove={() => {}} />);
  });

  test('displays item name and price', () => {
    render(<CartItem item={mockItem} onRemove={() => {}} />);

    expect(screen.getByText('Zipper pouch')).toBeInTheDocument();
    expect(screen.getByText('$12')).toBeInTheDocument();
  });

  test('calls onRemove with item id when Remove button is clicked', () => {
    const mockRemove = vi.fn();

    render(<CartItem item={mockItem} onRemove={mockRemove} />);

    const removeButton = screen.getByRole('button', { name: /remove/i });
    fireEvent.click(removeButton);

    expect(mockRemove).toHaveBeenCalledTimes(1);
    expect(mockRemove).toHaveBeenCalledWith(1);
  });
});
