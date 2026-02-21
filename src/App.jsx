 import React from 'react';
 import {Route, Routes} from "react-router-dom";
 import "./App.css";
 import Landingpage from './pages/landingpage';
import Registration from './pages/registration';
import {Mobile} from './componets/mobile';
import Laptops from './componets/laptop';
import Electronics from './componets/tv';
import SmartWatch from './componets/waches';
import Login from './pages/login';
import Eachmobile from './componets/eachmobile';
import Eachlaptop from "./componets/eachlaptop"
import Eachwach from './componets/eachwach';

import Eachelectronic from './componets/eachelectronic';
import Eachbuds from "./componets/eachbuds";
import Cart from './componets/cart';


 
 const App = () => {
   return (
     <div>
      
       <Routes>
         <Route path="/" element = {<Landingpage/>}/>
         <Route path="/register" element = {<Registration/>}/>
         <Route path="/mobiles" element = {<Mobile/>}/>
         <Route path="/laptops" element = {<Laptops/>}/>
         <Route path="/electronics" element = {<Electronics/>}/>
         <Route path="/waches" element = {<SmartWatch/>}/>
         <Route path="/login" element = {<Login/>}/>
           <Route path="/mobiles/:id" element={<Eachmobile/>}/>
           <Route path="/laptops/:id" element={<Eachlaptop/>}/>
           <Route path="/smartwatch/:id" element={<Eachwach/>}/> 
           <Route path="/electronics/:id" element={<Eachelectronic/>}/>
           <Route path="/earbuds/:id" element={<Eachbuds/>}/>
           <Route path="/cart" element={<Cart />} />
          

       </Routes>
       
       
     </div>
   );
 }
 
 export default App;
 