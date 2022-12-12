import React from "react";

export default function ProductDetails(props) {
  return (
    <div>
        
      {props.product.Title}
      <button className="goto" onClick={() => props.gotofavourates("main")}>
        Go To Product List
      </button>
      <button className="goto">Add To Cart</button>

     
    </div>
  );
}
