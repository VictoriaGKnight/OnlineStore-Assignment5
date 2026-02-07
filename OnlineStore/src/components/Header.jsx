import './Header.css';
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header className="app-header">
            <h2 className="logo">{props.storeName}</h2>

            <nav className="nav-menu">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/products" className="nav-link">Products</Link>
                <Link to="/cart" className="nav-link">Cart</Link>
            </nav>

            <Link to="/cart" className="cart-container">
                <span className="cart-icon">🛒</span>   
                {props.cartCount > 0 && (
                    <span className="cart-count">{props.cartCount}</span>
                )}
            </Link>
        </header>
    );
}

export default Header;