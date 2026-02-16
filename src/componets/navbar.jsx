import React from 'react';
import { Link } from 'react-router-dom';  
import "./navbar.css";
import Registration from '../pages/registration';
 

const Navbar = () => {

  return (
    <div>
       <div className='navsection'>
      <div className="title">
        <h3>MINI CART</h3>
      </div>
      <div className="search">
        <input type="text" placeholder='Enter your product...'/>
      </div>
      <div className="user">
         <button className="user-details"  id="sign">
          <Link to="/reg">SignIN/SignUP</Link> 
        </button>
        <div className="cart"> <img src="https://cdn-icons-png.flaticon.com/128/4903/4903482.png"  /></div>

      </div>
       
      
    </div>
      <div className="category">
      <ul>
        <Link to="/mobiles">
         <li>mobiles</li>
        </Link>
        <Link to="/laptops"><li>laptops</li></Link> 
        <Link to="/electronics"> <li>electronis</li></Link>
         <Link to="/waches"><li>waches</li></Link>
         
      </ul>
    </div>
    </div>
    
    
  );
}

export default Navbar
