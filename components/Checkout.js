// src/components/Checkout.js
import React from "react";
import { useCart } from "../contexts/CartContext";

function Checkout() {
  const { cart } = useCart();

  const handleBuy = () => {
    alert("Your order has been placed!");
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty! Add some products first.</p>
      ) : (
        <div>
          <h3>Your Order</h3>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <h4>{product.name}</h4>
              <span>${product.price}</span>
            </div>
          ))}
          <button onClick={handleBuy}>Buy Now</button>
        </div>
      )}
    </div>
  );
}

export default Checkout;

