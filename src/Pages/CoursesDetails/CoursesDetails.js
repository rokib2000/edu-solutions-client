import React from "react";
import { useReactToPrint } from "react-to-print";
import { useLoaderData } from "react-router-dom";
import { useRef } from "react";
import { FaRegHeart, FaUsers } from "react-icons/fa";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useEffect } from "react";
import { useState } from "react";

const CoursesDetails = () => {
  const [courses, setCourses] = useState([]);
  const course = useLoaderData();
  //   console.log(course);
  const { name, description, like, review, fee, img, duration, lecture, project, students } = course;

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "edu-solution",
    onafterprint: () => console.log("print success"),
  });

  useEffect(() => {
    fetch("https://edu-solutions-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  });

  return (
    <>
      <div ref={componentRef} style={{ width: "100%", height: "100%" }}>
        <div className="">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <div>
                    <div className="h-64 md:h-80 rounded-lg  mb-4">
                      <div className="h-64 md:h-80 rounded-lg  mb-4 flex items-center justify-center">
                        <img src={img} alt={name} className="rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:flex-1 px-4">
                  <h2 className="mb-2 leading-tight tracking-tight font-bold  text-2xl md:text-3xl">{name}</h2>
                  <p className=" text-sm">
                    By <span className="text-indigo-600">Edu Solutions</span>
                  </p>

                  <div className="flex items-center space-x-4 my-4">
                    <div>
                      <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                        <span className="text-indigo-400 mr-1 mt-1">$</span>
                        <span className="font-bold text-indigo-600 text-3xl">{fee}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-green-500 text-xl font-semibold">Duration: {duration}Month</p>
                      <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 my-4">
                    <div className="flex-1">
                      <div className="rating ">
                        <input type="radio" name="rating-1" className="mask mask-star text-amber-500" />
                        <input type="radio" name="rating-1" className="mask mask-star text-amber-500" />
                        <input type="radio" name="rating-1" className="mask mask-star text-amber-500" />
                        <input type="radio" name="rating-1" className="mask mask-star text-amber-500" />
                        <input type="radio" name="rating-1" className="mask mask-star text-amber-500" />
                      </div>
                      <p className=" text-xl ">
                        Review: <span className="text-amber-500">{review}</span>
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className=" text-xl ">
                        Lecture: <span className="text-violet-500">{lecture}</span>
                      </p>
                      <p className=" text-xl ">
                        Projects: <span className="text-violet-500">{project}</span>
                      </p>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <FaUsers className="mr-2 text-2xl text-fuchsia-600" />
                        <span className="font-semibold"> {students}</span>
                      </div>
                      <div className="flex items-center">
                        <FaRegHeart className="mr-2 text-2xl text-fuchsia-600" />{" "}
                        <span className="font-semibold">{like}</span>
                      </div>
                    </div>
                  </div>

                  <p className="">{description}</p>

                  <div className="flex py-4 space-x-4">
                    <button type="button" className="btn btn-secondary btn-md">
                      Add to Cart
                    </button>
                    <button onClick={handlePrint} className="btn btn-primary btn-md">
                      Save Pdf
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6">
        <div className="hero my-6 ">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-3xl font-bold">Related Courses</h1>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2">
          {courses.map((course) => (
            <RightSideNav key={course.id} course={course}></RightSideNav>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoursesDetails;
