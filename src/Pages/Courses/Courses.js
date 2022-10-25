import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useLoaderData();
  const [cart, setCart] = useState([]);

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
            <Course key={course.id} course={course}></Course>
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
        <div className="">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laborum aut earum officia minima, id
            adipisci sapiente neque, cumque soluta voluptatum optio non accusamus sit suscipit deserunt dolore autem
            maiores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
