import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import toast from "react-hot-toast";

const Register = () => {
  const [passwordError, setPasswordError] = useState("");

  const { emailPasswordRegister, updateUserProfile, verifyEmail } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const imageUrl = form.imageUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    // console.log(name, imageUrl, email, password, confirm);

    //  password Validation
    if (password.length < 6) {
      setPasswordError("Password should be 6 characters or more.");
      return;
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("Please provide at least one uppercase");
      return;
    }

    if (!/(?=.*[!@#$&*])/.test(password)) {
      setPasswordError("Please add at least one special character");
      return;
    }

    if (password !== confirm) {
      setPasswordError("Your Password did not match");
      return;
    }

    setPasswordError("");

    emailPasswordRegister(email, password)
      .then((result) => {
        // const user = result.user;
        updateUser(name, imageUrl);
        emailVerify();
        // console.log("Account Create Successfully");
        // console.log(user);
        toast.success("Account Create Successfully!");
        form.reset();
      })
      .catch((error) => {
        // console.log(error.message);
        toast.error(error.message);
      });
  };

  // update name and  image url
  const updateUser = (name, imageUrl) => {
    updateUserProfile(name, imageUrl)
      .then(() => {
        // console.log("info updated");
        // toast.success("Info Update Successfully!");
      })
      .catch((error) => {
        // console.error(error);
        toast.error(error.message);
      });
  };

  //email verify
  const emailVerify = () => {
    verifyEmail().then(() => {
      // console.log("Please check your email and verify your email address.");
      toast("Please check your email and verify your email address.!");
    });
  };

  return (
    <div>
      <div className="hero  ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input type="text" name="imageUrl" placeholder="Your Image URL" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text text-red-400">
                    <small>Please provide at least one uppercase, special character, and 6 or more</small>
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirm"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="">
                  <p className="label-text-alt text-red-500">{passwordError}</p>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="label-text-alt ">
                    Already have an a account? Please{" "}
                    <Link to="/login" className="link link-hover text-indigo-400">
                      Login
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
