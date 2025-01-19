import React from "react";
import { useCart } from "../contexts/CartContext"; // Use CartContext to access addToCart

function Product({ product }) {
  const { addToCart } = useCart(); // Access addToCart function

  // Handle add to cart button click
  const handleAddToCart = () => {
    addToCart(product); // Add product to cart
    alert(`${product.title} has been added to the cart!`); // Optional alert for user feedback
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <span>${product.price}</span>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
