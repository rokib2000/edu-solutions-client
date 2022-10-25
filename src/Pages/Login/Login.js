import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Login = () => {
  const { emailPasswordLogIn, googleLogIn, gitHubLogIn } = useContext(AuthContext);

  // Login with email password
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);

    emailPasswordLogIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        console.log("LogIn Successfully");
        form.reset();
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  // google login
  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        console.log("LogIn Successfully");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  // Github LogIn
  const handleGithubLogin = () => {
    gitHubLogIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        console.log("LogIn Successfully");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="hero ">
      <div className="hero-content flex-col  ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card w-96 flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
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
          </form>
          <div className="divider">OR</div>
          <div className="card-body mb-6">
            <div className="form-control ">
              <button onClick={handleGoogleLogin} className="btn btn-primary">
                Login with Google
              </button>
            </div>
            <div className="form-control mt-6">
              <button onClick={handleGithubLogin} className="btn btn-primary">
                Login with GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
