import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="hero  ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">Welcome to our Blog</h1>
          </div>
        </div>
      </div>

      <div className="card  bg-base-100 shadow-xl mb-6">
        <div className="card-body">
          <h2 className="card-title">What is cors?</h2>
          <p>
            Cross-origin resource sharing (CORS) is an HTTP-header-based mechanism that allows a server to indicate its
            own domain, scheme, or port from which a browser is allowed to load resources.
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>

      <div className="card  bg-base-100 shadow-xl mb-6">
        <div className="card-body">
          <h2 className="card-title">
            Why are you using firebase? What other options do you have to implement authentication?
          </h2>
          <p>
            Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to
            authenticate users to your app. It supports authentication using passwords, phone numbers, and popular
            federated identity providers like Google, Facebook, Twitter, and more.
            <br />
            <br />
            Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase
            Authentication.
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>

      <div className="card  bg-base-100 shadow-xl mb-6">
        <div className="card-body">
          <h2 className="card-title">How does the private route work?</h2>
          <p>
            The private root component renders the child component(s) if the user is logged in. If not logged in, the
            user is redirected to the /login page with the return URL passed in the location state property.
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>

      <div className="card  bg-base-100 shadow-xl mb-6">
        <div className="card-body">
          <h2 className="card-title">What is Node? How does Node work?</h2>
          <p>
            Node.js is an open source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript
            engine and executes JavaScript code outside a web browser, designed to build scalable network applications.
            <br />
            <br />
            Node work on a chrome v8 engine.
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
