import React from "react";
import { useLoaderData } from "react-router-dom";

const FAQ = () => {
  const questions = useLoaderData();
  console.log(questions);
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
        {questions.map((question) => (
          <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">{question.qun}</div>
            <div className="collapse-content">
              <p>{question.ans}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
