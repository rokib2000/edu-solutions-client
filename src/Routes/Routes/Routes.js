import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import CoursesDetails from "../../Pages/CoursesDetails/CoursesDetails";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Page404 from "../../Pages/Page404/Page404";
import Register from "../../Pages/Register/Register";
import CourseAccess from "../../Pages/Shared/CourseAccess/CourseAccess";
import Profile from "../../Pages/Shared/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        loader: async () => fetch("https://edu-solutions-server.vercel.app/courses"),
        element: <Courses></Courses>,
      },
      {
        path: "/course/:id",
        loader: async ({ params }) => fetch(`https://edu-solutions-server.vercel.app/course/${params.id}`),
        element: <CoursesDetails></CoursesDetails>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/premiumAccess",
        element: (
          <PrivateRoute>
            <CourseAccess />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Page404></Page404>,
  },
]);
