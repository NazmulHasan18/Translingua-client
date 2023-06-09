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

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <AuthProvider>
            <RouterProvider router={router} />
            <ToastContainer />
         </AuthProvider>
      </QueryClientProvider>
   </React.StrictMode>
);
