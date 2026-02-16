 import React from 'react';
 import {Route, Routes} from "react-router-dom";
 import "./App.css";
 import Landingpage from './pages/landingpage';
import Registration from './pages/registration';
import Mobile from './componets/mobile';
import Laptops from './componets/laptop';
import Electronics from './componets/tv';
import SmartWatch from './componets/waches'
 
 const App = () => {
   return (
     <div>
      
       <Routes>
         <Route path="/" element = {<Landingpage/>}/>
         <Route path="/reg" element = {<Registration/>}/>
         <Route path="/mobiles" element = {<Mobile/>}/>
         <Route path="/laptops" element = {<Laptops/>}/>
         <Route path="/electronis" element = {<Electronics/>}/>
         <Route path="/waches" element = {<SmartWatch/>}/>
       </Routes>
       
       
     </div>
   );
 }
 
 export default App;
 