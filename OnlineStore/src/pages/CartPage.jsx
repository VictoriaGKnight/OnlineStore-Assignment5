import CartItem from "../components/CartItem";

function CartPage({ cart, removeFromCart, cartTotal }) {
  return (
    <main className="main-content">
      <h2>Your Cart</h2>

      {cart.length > 0 ? (
        <>
          {cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={removeFromCart}
            />
          ))}

          <h4 className="cart-total">
            Total: ${cartTotal.toFixed(2)}
          </h4>
        </>
      ) : (
        <div className="empty-cart">
          <h3>Your cart is empty</h3>
          <p>Add some products to get started!</p>
        </div>
      )}
    </main>
  );
}

export default CartPage;