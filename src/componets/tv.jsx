import React, { useEffect, useState, useContext } from "react";
import "./tv.css";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const URL = "https://dummyjson.com/products/category/mobile-accessories"; // ✅ Outside

const Electronics = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [filter, setFilter] = useState("FILTER");
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data.products); // ✅ Fixed

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <h2>Loading Earbuds...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  const filterOptions = ["FILTER", ...new Set(products.map(item => item.title.split(" ")[0]))];

  const filteredProducts =
    filter === "FILTER"
      ? products
      : products.filter(item => item.title.startsWith(filter));

  return (
    <div className="electronics">
      <h1 className="electronics-title">Electronics</h1>

      <div className="filter-section">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          {filterOptions.map((f, index) => (
            <option key={index} value={f}>{f}</option>
          ))}
        </select>
      </div>

      <div className="electronics-grid">
        {filteredProducts.map((item) => (
          <div key={item.id} className="electronics-card">
            <Link to={`/electronics/${item.id}`}>
              <img src={item.thumbnail} alt={item.title} /> {/* ✅ Fixed */}
            </Link>
            <h3>{item.title}</h3>
            <p className="price">₹ {item.price}</p>
            <button onClick={() => addToCart(item)}>ADD TO CART</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;