import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "./useAuth";

const useAxiosInstance = () => {
   const { logOut } = useAuth();
   const [axiosInstance, setAxiosInstance] = useState(null);

   useEffect(() => {
      const API_BASE_URL = "http://your-server-url.com/api"; // Replace with your server URL

      const instance = axios.create({
         baseURL: API_BASE_URL,
         headers: {
            "Content-Type": "application/json",
            // You can add any default headers here
         },
      });

      // Add an interceptor to include the JWT token in the Authorization header
      instance.interceptors.request.use(
         (config) => {
            const token = localStorage.getItem("jwt-token"); // Get JWT token from localStorage
            if (token) {
               config.headers["Authorization"] = `Bearer ${token}`;
            }
            return config;
         },
         (error) => {
            return Promise.reject(error);
         }
      );

      // Add an interceptor to handle responses and log out the user on 401 or 403 status codes
      instance.interceptors.response.use(
         (response) => response,
         (error) => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
               // Assuming you have a useAuth() hook with a logOut function
               logOut();
            }
            return Promise.reject(error);
         }
      );

      setAxiosInstance(instance);
   }, [logOut]);

   return axiosInstance;
};

export default useAxiosInstance;
