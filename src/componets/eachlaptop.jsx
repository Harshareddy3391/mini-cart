import React, { useEffect, useState } from "react";
import "./eachmobile.css";
import { useParams } from "react-router-dom";
import  Navbar from "./navbar"

const Eachlaptop = () => {

  let { id } = useParams();
  let [lap, setlap] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setlap(data))
      .catch(err => console.log(err));
  }, [id]);

  if (!lap) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Navbar/>
       <div className="ind-img">
      <div className="left">
        <h4 >{lap.brand}</h4>
        <img 
          src={lap.thumbnail} 
          alt={lap.title} 
          className="main-img"
        />

        <div className="small-imgs">
          {lap.images?.map((img, index) => (
            <img key={index} src={img} alt="product" />
          ))}
        </div>
        </div>


        <div className="right">
          <h2>{lap.title}</h2>
          <p style={{color:"green"}}>₹ {lap.price}</p>
            <p style={{color:"brown"}}>{lap.rating}</p>
          <p>{lap.description}</p>
          <button>Ad to cart</button>
        </div>
       
    </div>
    </div>
    
  );
};

export default Eachlaptop;
