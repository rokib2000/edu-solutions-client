import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <>
      <div className="hero my-6 ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">Our Courses</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="basis-3/4 mx-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 xs:my-4">
            {courses.map((course) => (
              <Course key={course.id} course={course}></Course>
            ))}
          </div>
        </div>
        <div className="basis-1/4 mx-4">
          <div>
            {courses.map((course) => (
              <RightSideNav key={course.id} course={course}></RightSideNav>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
