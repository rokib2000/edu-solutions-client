import React from "react";
import { useReactToPrint } from "react-to-print";
import { FaUsers, FaRegHeart } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { useRef } from "react";

const CoursesDetails = () => {
  const course = useLoaderData();
  //   console.log(course);
  const { name, description, type, like, review, fee, img, lecture, project, students } = course;

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "edu-solution",
    onafterprint: () => console.log("print success"),
  });

  return (
    <div ref={componentRef} style={{ width: "100%", height: window.innerHeight }}>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt={name} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary badge-sm">{type}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-between my-4">
            <div className="rating">
              <input type="radio" name="rating-1" className="mask mask-star " />
              <input type="radio" name="rating-1" className="mask mask-star " />
              <input type="radio" name="rating-1" className="mask mask-star " />
              <input type="radio" name="rating-1" className="mask mask-star " />
              <input type="radio" name="rating-1" className="mask mask-star " />
            </div>
            <div className="">Review: {review}</div>
          </div>
          <div className="card-actions justify-between">
            <div className="">Lecture: {lecture}</div>
            <div className="">Projects: {project}</div>
          </div>
          <div className="card-actions justify-between">
            <div className="flex items-center">
              <FaUsers className="mr-2 text-2xl" /> {students}
            </div>
            <div className="flex items-center">
              <FaRegHeart className="mr-2 text-xl" /> {like}
            </div>
            <div className="">Fee: {fee}</div>
          </div>
          <div className="card-actions  justify-between mt-4">
            <button onClick={handlePrint} className="btn btn-secondary btn-sm">
              Save Pdf
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;
