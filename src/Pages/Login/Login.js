import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero ">
      <div className="hero-content flex-col  ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card w-96 flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="Your Email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="Password" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <button className="label-text-alt link link-hover">Forgot password?</button>
              </label>
              <label className="label">
                <p className="label-text-alt ">
                  New to this website? Please{" "}
                  <Link to="/register" className="link link-hover text-indigo-400">
                    Register
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
          <div className="divider">OR</div>
          <div className="card-body mb-6">
            <div className="form-control ">
              <button className="btn btn-primary">Login with Google</button>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login with GitHub</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
