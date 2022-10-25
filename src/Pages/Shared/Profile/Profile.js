import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="">
      <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <div className="avatar">
            <div className="w-24 mask mask-squircle">
              <img src={user.photoURL ? user.photoURL : "https://i.postimg.cc/sXGghwsb/profile.png"} alt="" />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user?.displayName}</h2>
          <p>Email: {user?.email}</p>
          <p>Phone: {user.phoneNumber ? user?.phoneNumber : "Null"}</p>
          <p>Verified: {user.emailVerified ? "true" : "false"}</p>
          <p>User Id: {user?.uid}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
