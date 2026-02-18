/*import React, { useState, useEffect } from 'react';
import "./laptop"

const Laptops = () => {

  const [laptop, setLaptop] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://dummyjson.com/products/category/laptops";

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setLaptop(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, []);

  // Loading State
  if (loading) {
    return <h2>Loading laptops...</h2>;
  }

  // Error State
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div className='laptop'>
      <h1 className='laptop-name'>Laptops</h1>

      {laptop.map((laptopdata) => (
        <div key={laptopdata.id} className='each-laptop'>
          <img
            src={laptopdata.thumbnail}
            alt={laptopdata.title}
            width="200"
          />
          <h3>{laptopdata.title}</h3>
          <p>₹ {laptopdata.price}</p>
        </div>
      ))}

    </div>
  );
};

export default Laptops;*/

 
import React, { useEffect, useReducer } from "react";
import "./laptop.css";
import {Link} from "react-router-dom"

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
  const url = "https://dummyjson.com/products/category/laptops";

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
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

    fetchData();

  }, []);

  // Loading
  if (state.loading) {
    return <h2>Loading laptops...</h2>;
  }

  // Error
  if (state.error) {
    return <h2>Error: {state.error}</h2>;
  }

  return (
    <div className="laptop">
      <h1 className="laptop-name">Laptops</h1>

      {state.laptops.slice(0,4).map((laptop) => (
        <div key={laptop.id} className="each-laptop">
          
          <Link to={ `/laptops/${laptop.id}`}>
           <img
            src={laptop.thumbnail}
            alt={laptop.title}
            width="200"
          />
          
          </Link>
          <pre className="info">
             <h3>{laptop.title}</h3>
          <p>₹ {laptop.price}</p>
          <button>Aadd to cart</button>
          </pre>
          
        </div>
      ))}

    </div>
  );
};

export default Laptops;
