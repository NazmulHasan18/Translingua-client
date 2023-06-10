import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Instructors from "../pages/Instructors/Instructors";
import Instructor from "../pages/Instructor/Instructor";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";

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
            path: "/classes",
            element: <Classes></Classes>,
         },
         {
            path: "/instructor/:id",
            element: <Instructor></Instructor>,
         },
      ],
   },
   {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children: [
         {
            path: "my_classes",
            element: <MyClasses></MyClasses>,
         },
      ],
   },
]);
