import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";
import Cart from "../Shared/Cart/Cart";

const Courses = () => {
  const courses = useLoaderData();
  const [cart, setCart] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);

  const handleAddToCart = (selectCourse) => {
    // console.log(selectCourse);
    setSelectedCourse(selectCourse);
    let newCart = [];
    const exists = cart.find((course) => course.id === selectCourse.id);

    if (!exists) {
      newCart = [...cart, selectCourse];
    } else {
      const rest = cart.filter((course) => course.id !== selectCourse.id);
      // exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="basis-3/4 mx-4">
        <div className="hero  ">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold">Our Courses</h1>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 xs:my-4">
          {courses.map((course) => (
            <Course key={course.id} course={course} handleAddToCart={handleAddToCart}></Course>
          ))}
        </div>
      </div>
      <div className="basis-1/4 mx-4">
        <div className="hero  ">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold">Selected Courses</h1>
            </div>
          </div>
        </div>
        <div>
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Courses;
