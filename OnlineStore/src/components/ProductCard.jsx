import './ProductCard.css';

function ProductCard({ product, onAddToCart }) {
    return(
        <div className="product-card">
            <img className="product-image" src={product.image} />
            

            <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>

                <button onClick={() => onAddToCart(product)}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;