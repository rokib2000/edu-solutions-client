import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  //   console.log(cart);
  return <div> {cart.map((course) => console.log(course))} </div>;
};

export default Cart;
