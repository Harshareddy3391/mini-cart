import React, { useEffect, useReducer, useState , useContext } from "react";
import "./laptop.css";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const initialState = {
  loading: true,
  error: null,
  laptops: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: null,
        laptops: action.payload
      };

    case "FETCH_ERROR":
      return {
        loading: false,
        error: action.payload,
        laptops: []
      };

    default:
      return state;
  }
};

const Laptops = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
   const { addToCart } = useContext(CartContext); 
  const [lapbrand, setLapbrand] = useState("FILTER");

  const url = "https://dummyjson.com/products/category/laptops";

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(url);
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

    fetchData();

  }, []);

  if (state.loading) return <h2>Loading laptops...</h2>;
  if (state.error) return <h2>Error: {state.error}</h2>;

  // 🔥 Unique Brands
  const brands = ["FILTER", ...new Set(state.laptops.map(item => item.brand))];

  // 🔥 Filter Logic
  const filteredLaptops =
    lapbrand === "FILTER"
      ? state.laptops
      : state.laptops.filter(item => item.brand === lapbrand);

  return (
    <div className="laptop">

      <h1 className="laptop-name">Laptops</h1>

      



      <div className="filter-section">
        <select value={lapbrand} onChange={(e) => setLapbrand(e.target.value)}>
          {brands.map((b, index) => (
            <option key={index} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>
       <div className="laptop-bar"> 
      {filteredLaptops.slice(0, 4).map((laptop) => (
        <div key={laptop.id} className="each-laptop">

          <Link to={`/laptops/${laptop.id}`}>
            <img
              src={laptop.thumbnail}
              alt={laptop.title}
              width="200"
            />
          </Link>

          <div className="info">
            <h3>{laptop.title}</h3>
            <p>₹ {laptop.price}</p>
            <button onClick={() => addToCart(laptop)}>Add to cart</button>
          </div>

        </div>
      ))}

      </div>

    </div>
  );
};

export default Laptops;
