import React, {useState,useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import "./eachmobile.css";
import  Navbar from "./navbar"
import { CartContext } from './CartContext';
 
const  Eachwach = () => {
    let {id}=useParams()
    let [wach,setwach]=useState(null);
    let {addToCart}=useContext(CartContext);
   


    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => setwach(data))
        .catch(error => console.log(error))
    },[id])

if(!wach){
    return <h2>Loading...</h2>
}
  return (
    <div>
        <Navbar/>
    
    <div className='ind-img'>
         
        <div className="left">
             <h4 >{wach.brand}</h4>
            <img src={wach.thumbnail} alt={wach.title} className='main-img'/>
            <div className="small-imgs">
                
            {
                wach.images?.map((pic,index)=>(
                    <img src={pic} className="small-img"
                    key={index} alt="watch" />
                ))
            }
            </div>
             </div>

            <div className="right">
                <h2>{wach.title}</h2>
                <p style={{color:"green"}}> ₹ {wach.price}</p>

                <p style={{color:"brown"}}>{wach.rating}</p>
                <p>{wach.description}</p>
                 < button onClick={() => addToCart(wach)}>ADD TO CART</button>

            </div>



        
      
    </div>
     </div>
  )
}

export default Eachwach;
