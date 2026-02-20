import React, { useEffect, useState,useContext } from "react";
import "./watches.css";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const SmartWatch = () => {

  const [watch, setWatch] = useState([]);
  const [brand, setBrand] = useState("FILTER");
  let {addToCart}=useContext(CartContext);

  const url = "https://dummyjson.com/products/category/mens-watches";

  useEffect(() => {
    const fetchWatch = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setWatch(data.products);
    };

    fetchWatch();
  }, []);

 
  let brandnames = ["FILTER", ...new Set(watch.map(item => item.brand))];

  
  let filterwatch =
    brand === "FILTER"
      ? watch
      : watch.filter((wdata) => wdata.brand === brand);

  return (
    <div className="watch">

      <h1 className="watch-name">Smart Watches</h1>

      {/* 🔥 Brand Dropdown */}
      <div className="filter-section">
        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
          {brandnames.map((b, index) => (
            <option key={index} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="watch-bar">
        {filterwatch.slice(0, 8).map((item) => (
          <div key={item.id} className="each-watch">

            <Link to={`/smartwatch/${item.id}`}>
              <img src={item.thumbnail} alt={item.title} />
            </Link>

            <div className="info">
              <h3>{item.title}</h3>
              <p>₹ {item.price}</p>
            </div>

            <p>{item.brand}</p>
            <button onClick={ () => addToCart(item)}>ADD TO CART</button>

          </div>
        ))}
      </div>

    </div>
  );
};

export default SmartWatch;
