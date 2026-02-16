import React from 'react'
import Mobile from './mobile';
import Laptopdata from './laptop';
import SmartWatch  from "./waches";
//import TV from"./tv";
import Electronics from './tv';
import Earbuds from "./earbuds"
import Laptops from './laptop';

const products = () => {
  return (
    <div>
        
        <Mobile/>
        <Laptops/>
        
        <SmartWatch/>
        <Electronics/>
        <Earbuds/>
         
         
      
    </div>
  );
}

export default products
