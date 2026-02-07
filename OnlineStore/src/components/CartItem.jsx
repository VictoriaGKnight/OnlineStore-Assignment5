import './CartItem.css'

function CartItem({ item, onRemove }) {
    return (
        <div className="cart-item">
            <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">${item.price}</p>
            </div>

            <button onClick={() => onRemove(item.id)}>
                Remove
            </button>
        </div>
    );
}

export default CartItem;