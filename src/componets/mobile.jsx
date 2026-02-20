import React, { useEffect, useReducer, useState, useContext } from 'react';
import "./mobile.css";
import { Link } from "react-router-dom";
import { CartContext } from './CartContext';

const initialState = {
  loading: true,
  error: null,
  mobiles: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: null,
        mobiles: action.payload
      };

    case "FETCH_ERROR":
      return {
        loading: false,
        error: action.payload,
        mobiles: []
      };

    default:
      return state;
  }
};

export const Mobile = () => {

  const { addToCart } = useContext(CartContext);  // ✅ MOVED HERE - CORRECT!

  const [state, dispatch] = useReducer(reducer, initialState);
  const [brand, setBrand] = useState("FILTER");

  const murl = "https://dummyjson.com/products/category/smartphones";

  useEffect(() => {
    const fetchMobiles = async () => {
      try {
        const response = await fetch(murl);
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

    fetchMobiles();
  }, []);

  if (state.loading) return <h2>Loading mobiles...</h2>;
  if (state.error) return <h2>Error: {state.error}</h2>;

  const brands = ["FILTER", ...new Set(state.mobiles.map(item => item.brand))];

  const filteredMobiles =
    brand === "FILTER"
      ? state.mobiles
      : state.mobiles.filter(item => item.brand === brand);

  return (
    <div className='mobile'>
      <h1 className='mobile-name'>Mobiles</h1>

      <div className="filter-section">
        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
          {brands.map((b, index) => (
            <option key={index} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="mobile-bar">
        {filteredMobiles.map((Eachmobile) => (
          <div key={Eachmobile.id} className="each-mobile">

            <Link to={`/mobiles/${Eachmobile.id}`}>
              <img
                src={Eachmobile.thumbnail}
                alt={Eachmobile.title}
              />
            </Link>

            <div className='info'>
              <h3>{Eachmobile.title}</h3>
              <h5>{Eachmobile.brand}</h5>
              <p className="price">₹ {Eachmobile.price}</p>
              <button onClick={() => addToCart(Eachmobile)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};