import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import { useState, useEffect } from "react";

function App() {

 const products = [
  {
    id: 1,
    name:"Zipper pouch",
    price:12.00,
    image:"https://placehold.co/600X400",
    description:"High-quality, super cute hand-made zipper pouch that can hold anything!"
  },
  {
    id: 2,
    name:"Rag-quilt Tote Bag",
    price:65.00,
    image:"https://placehold.co/600x400",
    description:"Super cute hand-made tote bag! All patterns are fully customizable and bag is big enough to hold everything!"
  },
  {
    id: 3,
    name:"Wristlet Key-Chain",
    price:6.00,
    image:"https://placehold.co/600x400",
    description:"Hand-made, adorable key-chain wristlet! Fully customizable and the perfect addition to any keys!"
  }
 ] 

 const [cart, setCart] = useState(() => {
  try {
    const savedCart = localStorage.getItem("componentcorner-cart")
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.warn("Could not load cart from localStorage:", error);
    return [];
  }
 });

 useEffect(() => {
  try {
    localStorage.setItem(
      "componentcorner-cart",
      JSON.stringify(cart)
    );
  } catch (error) {
    console.warn("Could not save cart to localStorage:", error);
  }
 }, [cart]);

 const addToCart = (product) => {
  console.log("adding to cart:", product);
  setCart([...cart, product]);
 };

 const removeFromCart = (id) => {
  setCart(cart.filter(item => item.id !== id));
 };

 const cartTotal = cart.reduce(
  (total, item) => total + item.price,
  0
 );

 return(
  <BrowserRouter>
    <div className="app">
      <Header
        storeName="Online Craft store"
        cartCount={cart.length}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/products"
          element={
            <ProductsPage
              products={products}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
              cartTotal={cartTotal}
            />
          }
        />
      </Routes>

      <Footer
        storeName="Online Craft Store"
        email="lovecrafts@create.com"
        phone="(123) 456-7890"
        address="123 Maker Street, lovesville, SC 12345"
      />
    </div>
  </BrowserRouter>
 );
}

export default App
