import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./cart.css";

const Cart = () => {

  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  // ✅ Calculate total with quantity
  const total = cart.reduce((sum, item) => {
    const quantity = item.quantity || 1;
    return sum + (item.price * quantity);
  }, 0);

  console.log(cart);

  // ✅ Show only "NO ITEMS" when cart is empty
  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h1>NO ITEMS</h1>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.title} />

            <div className="item-info">
              <h3>{item.title}</h3>
              <p className="price">₹ {item.price}</p>
            </div>

            {/* ✅ Quantity Controls */}
            <div className="quantity-control">
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <span>QUANTITY :{item.quantity || 1 }</span>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>

            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <h2>Total: ₹ {total.toFixed(2)}</h2>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;