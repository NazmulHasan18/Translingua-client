import React from "react";
import ReactDOM from "react-dom/client";
import "react-toggle/style.css";
import "swiper/css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Route";
import AuthProvider from "./providers/AuthProvider";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <AuthProvider>
         <RouterProvider router={router} />
         <ToastContainer />
      </AuthProvider>
   </React.StrictMode>
);
