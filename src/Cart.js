import React, { useEffect, useState } from 'react'
import dummyFoodData from './CartData'
import './Cart.css'; 
import {useNavigate} from 'react-router-dom' 
           //to redirect


const Cart = () => {
  const [cartData,setCartData] = useState([])
  
  let navigate = useNavigate()

  let [cart,setCart] = useState([])

  useEffect(()=>{
    setCartData(dummyFoodData.map(item =>({...item , quantity:0})));
  },[])

  function addCart(){
    navigate('/view',{state :{cart}});
  }

  const AddToCart = (id) => {
    console.log(id);
    const updatedCart = cartData.map(item =>
      item.id === id ? { ...item, quantity: 1 } : item
    );
    setCartData(updatedCart);

    const productToAdd = { ...cartData.find(item => item.id === id), quantity: 1 };
    setCart([...cart, productToAdd]);
  };


  const handleAdd = (id) => {
    const updatedCart = cartData.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartData(updatedCart);
  };

  const handleRemove = (id) => {
    const updatedCart = cartData.map(item =>
      item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartData(updatedCart);
   };


  const getTotalPrice =()=>{
     return cartData.reduce((total,item)=>
      total + item.quantity * item.price,0)  
  };

  function handleViewCart(){
    let filteredCart = cartData.filter(item => item.quantity>0)
    let price = getTotalPrice()
    navigate('/view',{state : {cart: filteredCart , price}})
  }
  


  return (    
    <div className="cart-container">
      <h2>Cart</h2>
      <button onClick={handleViewCart}>View Cart({cartData.filter(item => item.quantity>0).length})</button>
      <ul className="cart-items">
        {cartData.map(item =>(
          <li key = {item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="item-image"/>
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price : ${item.price}</p>
              <p>Quantity :{item.quantity}</p>
             {
               item.quantity===0?(
                <button onClick={()=>{AddToCart(item.id)}}>Add Cart</button>
               ):(
                <>               
                 <button onClick={()=>{handleRemove(item.id)}}>-</button>
                 {/* <span>{item.quantity}</span> */}
                 <button onClick={()=>{handleAdd(item.id)}}>+</button>
                </>
               )
             }
              
            </div>
          </li>
        ))}
      </ul>

      <p>Total price : ${getTotalPrice()}</p>
    </div>
  )
}

export default Cart
