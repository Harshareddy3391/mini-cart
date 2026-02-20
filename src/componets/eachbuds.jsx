import React, { useEffect, useState,useContext } from "react";
import "./eachmobile.css";
import { useParams } from "react-router-dom";
import  Navbar from "./navbar";
import { CartContext } from "./CartContext";

const Eachbuds = () => {

  let { id } = useParams();
  let [buds, setbuds] = useState(null);
  let {addToCart}=useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setbuds(data))
      .catch(err => console.log(err));
  }, [id]);

  if (!buds) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
        <Navbar/>
    
    <div className="ind-img">
      <div className="left">
        <h4 >{buds.brand}</h4>
        <img 
          src={buds.thumbnail} 
          alt={buds.title} 
          className="main-img"
        />

        <div className="small-imgs">
          {buds.images?.map((img, index) => (
            <img key={index} src={img} alt="product" />
          ))}
        </div>
        </div>


        <div className="right">
          <h2>{buds.title}</h2>
          <p style={{color:"green"}}>₹ {buds.price}</p>
            <p style={{color:"brown"}}>{buds.rating}</p>
          <p>{buds.description}</p>
          < button onClick={() => addToCart(buds)}>ADD TO CART</button>

        </div>
       
    </div>
     </div>
  );
};

export default Eachbuds;
