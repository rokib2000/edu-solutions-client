import React from "react";
import { Link } from "react-router-dom";

const RightSideNav = (props) => {
  const { course } = props;
  const { id, name, duration, fee, img } = course;

  return (
    <div className="mb-4">
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar ">
              <div className="w-24 mask mask-squircle">
                <img src={img} alt={name} />
              </div>
            </div>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">{name}</div>
          <div className=" text-secondary">Fee: ${fee}</div>
          <div className="stat-desc">Duration: {duration}Month</div>
          <Link to={`/course/${id}`} className="btn btn-primary btn-sm ">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
