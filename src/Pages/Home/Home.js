import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* hero section start  */}
      <div
        className="hero min-h-screen rounded"
        style={{ backgroundImage: `url("https://i.postimg.cc/QMgCtKCr/Ethical-Education-Updated.png")` }}
      >
        <div className="hero-overlay "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Let's Study Together!</h1>

            <Link to="/courses" className="btn btn-primary">
              Get Courses
            </Link>
          </div>
        </div>
      </div>
      {/* hero section End  */}

      <div className="stats shadow w-full my-12">
        <div className="stat place-items-center">
          <div className="stat-title">Success Stories</div>
          <div className="stat-value">3K</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Dedicated Tutors</div>
          <div className="stat-value ">42</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Scheduled Events</div>
          <div className="stat-value">13</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Available Courses</div>
          <div className="stat-value">16</div>
        </div>
      </div>

      <div className="hero  h-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.postimg.cc/dQ8rzDwr/flex-teacher-nobkgd-1.png" className="max-w-lg rounded-lg " />
          <div>
            <h1 className="text-5xl font-bold">Want to know more!</h1>
            <p className="py-6">
              There arge many variations ohf passages of sorem gpsum ilable, but the majority have suffered alteration
              in some form, by ected humour, or randomised words whi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
