import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const filteredCart = cart.filter(
        (item) => item && item.name && item.price !== undefined
      );
      setCartItems(filteredCart);
    } catch (err) {
      console.error("Error reading cart from localStorage:", err);
      setCartItems([]);
    }
  }, []);

  function removeCart(id){
    setCartItems(prevCart => prevCart.filter(item => item.id !== id));
    const updatedCart = cartItems.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Item removed from cart successfully")
  };
  
  const handleOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
  
    // Example: Send to API or just log it
    console.log("Order placed:", cartItems);
  
    // Show confirmation
    alert("Thank you for your order!");
  
    // Clear the cart
    setCart([]);
  };
  

  return (
    <>
    <div className={styles.main}>
      <div className={styles.header}>
      <h2>Your Cart</h2>
      </div>
      <div className={styles.cartContainer}>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul className={styles.cartList}>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div className={styles.cartItem}>
                <h3> {item.name} </h3>
                <h3> {item.price} </h3>
                 <img src={item.image} className={styles.img}/>
                 <button className={styles.btn1} onClick={()=> removeCart(item.id)}> Remove from Cart</button>
                 <button className={styles.btn1} onClick={()=> handleOrder(item.id)}> Buy Now</button>
              </div>
          </li>
          ))}
        </ul>
      )}
      </div>
    <div className={styles.buttonContainer}>
    
      {/* <button className={styles.btn} */}
        {/* onClick={() => { */}
          {/* localStorage.removeItem("cart"); */}
          {/* window.location.reload(); */}
        {/* }} */}
      {/* > */}

      {/* </button> */}
      </div>
    </div>
    </>
  );
};

export default Cart;
