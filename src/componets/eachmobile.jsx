import React, { useEffect, useState } from "react";
import "./eachmobile.css"
import { useParams } from "react-router-dom";
import Navbar from "./navbar"

const Eachmobile = () => {

  const { id } = useParams();
  const [mobile, setMobile] = useState(null);
   
 

  useEffect(() => {
    // Fetch single product
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setMobile(data));
 
      
  }, [id]);   

  if (!mobile) {
    return <h2>Loading...</h2>;
  }

 
   
  return (
    <div> 
      <Navbar/>
      

       

      {/* Main product display */}
      <div className="ind-img">
        <div className="left">
          <h4>{mobile.brand}</h4>
          <img 
            src={mobile.thumbnail} 
            alt={mobile.title} 
            className="main-img"
          />

          <div className="small-imgs">
            {mobile.images?.map((img, index) => (
              <img key={index} src={img} alt="product" />
            ))}
          </div>
        </div>

        <div className="right">
          <h2>{mobile.title}</h2>
          <p className="price">₹ {mobile.price}</p>
          <p style={{color:"brown"}}>⭐ {mobile.rating}</p>
          <p className="desc">{mobile.description}</p>
          <button className="cart-btn">Add to cart</button>
        </div>
      </div>

      
    </div>
  );
};

export default Eachmobile;