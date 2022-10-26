import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";

const CourseAccess = () => {
  const { user } = useContext(AuthContext);

  const { displayName } = user;

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-3xl font-bold">
              Dear, <span className="text-secondary">{displayName}</span>
            </h1>
            <h1 className="text-4xl font-bold">Successfully Access Course</h1>
            <p className="py-6 text-xl">Thank you for enrolling in our course</p>
            <button className="btn btn-primary">Go to Dashboard</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAccess;
