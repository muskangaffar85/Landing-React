import React from 'react';
import { useCart } from '../contexts/CartContext'; // Import cart context

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
    // Add checkout functionality here (e.g., payment gateway)
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <button onClick={clearCart}>Clear Cart</button>
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;

