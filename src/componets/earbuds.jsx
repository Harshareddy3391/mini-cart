import React, { useEffect, useReducer } from "react";
import "./earbuds.css";
import { Link } from "react-router-dom";

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

  // Loading
  if (state.loading) {
    return <h2>Loading Earbuds...</h2>;
  }

  // Error
  if (state.error) {
    return <h2>Error: {state.error}</h2>;
  }

  return (
    <div className="earbuds">
      <h1 className="earbuds-title">Earbuds</h1>

      <div className="earbuds-grid">
        {state.earbuds.map((item) => (
          <div key={item.id} className="earbuds-card">
            <Link to={`/earbuds/${item.id} `}>
            <img src={item.thumbnail} alt={item.title} />
            </Link>
             
            <h3>{item.title}</h3>
            <p className="price">₹ {item.price}</p>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Earbuds;
