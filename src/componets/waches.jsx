import React, { useEffect, useState } from "react";
import "./watches.css"

const SmartWatch = () => {

  const [watch, setWatch] = useState([]);

  const url = "https://dummyjson.com/products/category/mens-watches";

  useEffect(() => {
    const fetchWatch = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setWatch(data.products);
    };

    fetchWatch();
  }, []);

  
    return (
  <div className="watch">
    <h1 className="watch-name">Smart Watches</h1>

    <div className="watch-bar">
      {watch.slice(0,8).map((item) => (
        <div key={item.id} className="each-watch">
          <img src={item.thumbnail} alt={item.title} />
          <pre className="info">
            <h3>{item.title}</h3>
            <p>₹ {item.price}</p>
            <button>Add to cart   </button>
          </pre>
        </div>
      ))}
    </div>
  </div>
);


};

export default SmartWatch;
