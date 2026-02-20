import React, { useEffect, useReducer, useState,useContext} from "react";
import "./earbuds.css";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const initialState = {
  loading: true,
  error: null,
  earbuds: []
};

const reducer = (state, action) => {
  switch (action.type) {

    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: null,
        earbuds: action.payload
      };

    case "FETCH_ERROR":
      return {
        loading: false,
        error: action.payload,
        earbuds: []
      };

    default:
      return state;
  }
};

const Earbuds = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [brand, setBrand] = useState("FILTER");
   let {addToCart}=useContext(CartContext);

  const url = "https://dummyjson.com/products/search?q=earbuds";

  useEffect(() => {

    const fetchEarbuds = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch earbuds");
        }

        const data = await response.json();

        dispatch({
          type: "FETCH_SUCCESS",
          payload: data.products
        });

      } catch (error) {

        dispatch({
          type: "FETCH_ERROR",
          payload: error.message
        });

      }
    };

    fetchEarbuds();

  }, []);

  if (state.loading) return <h2>Loading Earbuds...</h2>;
  if (state.error) return <h2>Error: {state.error}</h2>;

  // 🔥 Unique brands
  const brands = ["FILTER", ...new Set(state.earbuds.map(item => item.brand))];

  // 🔥 Filter logic
  const filteredEarbuds =
    brand === "FILTER"
      ? state.earbuds
      : state.earbuds.filter(item => item.brand === brand);

  return (
    <div className="earbuds">

      <h1 className="earbuds-title">Earbuds</h1>

      {/* 🔥 Brand Dropdown */}
      <div className="filter-section">
        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
          {brands.map((b, index) => (
            <option key={index} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="earbuds-grid">
        {filteredEarbuds.map((item) => (
          <div key={item.id} className="earbuds-card">
            <Link to={`/earbuds/${item.id}`}>
              <img src={item.thumbnail} alt={item.title} />
            </Link>

            <h3>{item.title}</h3>
            <p className="price">₹ {item.price}</p>
            <button onClick={() => addToCart(item)}>Add to cart</button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Earbuds;
