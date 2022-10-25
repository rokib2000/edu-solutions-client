import React from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const cart = props.cart;
  //   console.log(cart);
  return (
    <div>
      {cart.map((course) => (
        <div className="card card-side bg-base-100 shadow-xl mb-4">
          <div className="avatar">
            <div className="w-24 rounded">
              <img src={course.img} alt={course.name} />
            </div>
          </div>
          <div className="card-body p-4">
            <h2 className="card-title">{course.name}</h2>
            <p>Course Fee: ${course.fee}</p>
            <p>Course Duration: {course.duration}</p>
          </div>
        </div>
      ))}

      {cart && cart.length !== 0 ? (
        <Link to="/checkout" className="btn btn-wide btn-primary">
          Go to Check Out
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
