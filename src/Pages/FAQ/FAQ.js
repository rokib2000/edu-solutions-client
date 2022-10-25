import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";

const FAQ = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>FAQ page</h2>
      <p>{user?.displayName}</p>
    </div>
  );
};

export default FAQ;
