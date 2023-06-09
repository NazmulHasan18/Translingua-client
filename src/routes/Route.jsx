import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Instructors from "../pages/Instructors/Instructors";
import Instructor from "../pages/Instructor/Instructor";

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
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/register",
            element: <Register></Register>,
         },
         {
            path: "/instructors",
            element: <Instructors></Instructors>,
         },
         {
            path: "/instructor/:id",
            element: <Instructor></Instructor>,
         },
      ],
   },
]);
