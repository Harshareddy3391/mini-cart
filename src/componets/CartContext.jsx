import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

 

 

  // Add to cart
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      // ✅ Increase quantity if already in cart
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      ));
    } else {
      // ✅ Add new item with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
 
  };
 
  const increaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    ));
  };

  
  const decreaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 1) }
        : item
    ).filter(item => item.quantity > 0));
  };

  
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

 
  const clearCart = () => {
    setCart([]);
  };

  

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      clearCart, 
      
      increaseQuantity, 
      decreaseQuantity 
    }}>
      {children}
    </CartContext.Provider>
  );
};