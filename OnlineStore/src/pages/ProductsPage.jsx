import ProductCard from "../components/ProductCard";

function ProductsPage({ products, addToCart }) {
  return (
    <main className="main-content">
      <h2>Products</h2>

      <div className="products-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </main>
  );
}

export default ProductsPage;