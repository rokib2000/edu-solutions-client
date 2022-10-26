import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";

const FAQ = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="hero my-6 ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">FAQ</h1>
          </div>
        </div>
      </div>
      <div>
        <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
          <div className="collapse-title text-xl font-medium">Focus me to see content</div>
          <div className="collapse-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
          <div className="collapse-title text-xl font-medium">Focus me to see content</div>
          <div className="collapse-content">
            <p>tabIndex={1} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
          <div className="collapse-title text-xl font-medium">Focus me to see content</div>
          <div className="collapse-content">
            <p>tabIndex={2} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
          <div className="collapse-title text-xl font-medium">Focus me to see content</div>
          <div className="collapse-content">
            <p>tabIndex={3} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div tabIndex={4} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
          <div className="collapse-title text-xl font-medium">Focus me to see content</div>
          <div className="collapse-content">
            <p>tabIndex={4} attribute is necessary to make the div focusable</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
