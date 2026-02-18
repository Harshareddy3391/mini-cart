import React, { useEffect, useState } from "react";
import "./tv.css";
import { Link } from "react-router-dom";

const Electronics = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://fakestoreapi.com/products/category/electronics";

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

  }, []);

  // Loading state
  if (loading) {
    return <h2>Loading Electronics...</h2>;
  }

  // Error state
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div className="electronics">
      <h1 className="electronics-title">Electronics</h1>

      <div className="electronics-grid">
        {products.map((item) => (
          <div key={item.id} className="electronics-card">
           <Link to={`/electronics/${item.id}`}>  <img src={item.image} alt={item.title} /></Link>
            <h3>{item.title}</h3>
            <p className="price">₹ {item.price}</p>
            <button>Aadd to cart</button>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;
