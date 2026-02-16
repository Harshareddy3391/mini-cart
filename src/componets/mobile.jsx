import React, { useEffect, useReducer } from 'react';
import "./mobile.css";

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

const Mobile = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const murl = "https://dummyjson.com/products/category/smartphones";

  useEffect(() => {

    const fetchMobiles = async () => {
      try {
        const response = await fetch(murl);

        if (!response.ok) {
          throw new Error("Failed to fetch mobiles");
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

    fetchMobiles();

  }, []);

  // Loading state
  if (state.loading) {
    return <h2>Loading mobiles...</h2>;
  }

  // Error state
  if (state.error) {
    return <h2>Error: {state.error}</h2>;
  }

  return (
    <div className='mobile'>
      <h1 className='mobile-name'>Mobiles</h1>

      <div className="mobile-bar">

        {state.mobiles.slice(0, 8).map((Eachmobile) => (
          <div key={Eachmobile.id} className="each-mobile">

            <img
              src={Eachmobile.thumbnail}
              alt={Eachmobile.title}
            />

            <div className='info'>
              <h3>{Eachmobile.title}</h3>
              <h5>{Eachmobile.category}</h5>
               <p className="price">₹ {Eachmobile.price}</p>

               <button>Add to cart</button>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Mobile;
