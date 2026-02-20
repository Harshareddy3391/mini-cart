import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import { CartContext } from "./CartContext";  // ✅ Removed unused Registration import

const Navbar = () => {

  let { cart } = useContext(CartContext);

  return (
    <div>
      <div className='navsection'>
        <div className="title">
          <h3>MINI CART</h3>
        </div>
        <div className="search">
          <input type="text" placeholder='Enter your product...' />
        </div>
        <div className="user-details">
          <button id="sign">
            <Link to="/register">SignIN/SignUP</Link>
          </button>
        </div>
        <div className="user">
          <Link to="/cart">
            <div className="cart">
              <img
                src="https://cdn-icons-png.flaticon.com/128/4903/4903482.png"
                alt="cart-icon"   // ✅ Added alt
              />
              <span  id="len">{cart.length}</span> 
            </div>
             
          </Link>
        </div>
      </div>

      <div className="category">
        <ul>
          <Link to="/mobiles"><li>Mobiles</li></Link>
          <Link to="/laptops"><li>Laptops</li></Link>
          <Link to="/electronics"><li>Electronics</li></Link>   
          <Link to="/watches"><li>Watches</li></Link>            
        </ul>
      </div>
    </div>
  );
}

export default Navbar;