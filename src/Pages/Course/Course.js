import React from "react";
import { FaUsers, FaRegHeart } from "react-icons/fa";

const Course = (props) => {
  const { name, type, like, review, fee, img, lecture, project, students } = props.course;

  // console.log(course);
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary badge-sm">{type}</div>
          </h2>
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
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary w-full">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
