import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import "./eachmobile.css";
import  Navbar from "./navbar"

const Eachelectronic = () => {
  let [electronic, setelectrinic]=useState(null);

  useEffect(()=>{
   fetch(`https://dummyjson.com/products/${id}`)
   .then(furl => furl.json())
   .then(electronicdata => setelectrinic(electronicdata))
   .catch(er => console.log(er))
  },[id]);

  if(!electronic){
    return <h2>Loading...</h2>
  }


  return (
    <div>
      <Navbar/>
        <div className="ind-img">
      <div className="left">
        <h4 >{electronic.brand}</h4>
        <img 
          src={electronic.thumbnail} 
          alt={electronic.title} 
          className="main-img"
        />

        <div className="small-imgs">
          {electronic.images?.map((img, index) => (
            <img key={index} src={img} alt="product" />
          ))}
        </div>
        </div>


        <div className="right">
          <h2>{electronic.title}</h2>
          <p style={{color:"green"}}>₹ {electronic.price}</p>
            <p style={{color:"brown"}}>{electronic.rating}</p>
          <p>{electronic.description}</p>
        </div>
       
    </div>
    </div>
       
  )
}

export default Eachelectronic;
