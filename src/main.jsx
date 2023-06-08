import React from "react";
import ReactDOM from "react-dom/client";
import "react-toggle/style.css";
import "swiper/css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Route";
import AuthProvider from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <AuthProvider>
         <RouterProvider router={router} />
      </AuthProvider>
   </React.StrictMode>
);
