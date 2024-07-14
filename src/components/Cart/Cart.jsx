import React from "react";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const dataReceived = location.state;

  console.log(dataReceived);
  return (
    <div>
      <h1>Cart</h1>
      {/* {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map(product => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
          </div>
        ))
      )} */}
    </div>
  );
};

export default Cart;
