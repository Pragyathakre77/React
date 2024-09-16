import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
 

const ViewCart = () => {
  const location = useLocation();
  const {cart , price} = location.state;
  console.log(cart,price , "heyy");
  let [totalPrice , setTotalprice] = useState(price)
  let [dcart , setDCart] = useState(cart)
  return (
    <div>
      <h2>View Cart</h2>
      <ul>
        <h5>TotalPrice : { price }</h5>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewCart
