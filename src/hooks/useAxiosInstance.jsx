import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "./useAuth";

const useAxiosInstance = () => {
   const { logOut } = useAuth();
   const [axiosInstance, setAxiosInstance] = useState(null);

   const API_BASE_URL = "http://localhost:5000";

   const instance = axios.create({
      baseURL: API_BASE_URL,
      headers: {
         "Content-Type": "application/json",
      },
   });
   useEffect(() => {
      instance.interceptors.request.use(
         (config) => {
            const token = localStorage.getItem("jwt-token");
            if (token) {
               config.headers["Authorization"] = `Bearer ${token}`;
            }
            return config;
         },
         (error) => {
            return Promise.reject(error);
         }
      );

      instance.interceptors.response.use(
         (response) => response,
         (error) => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
               logOut()
                  .then(() => {})
                  .catch((err) => {
                     console.log(err);
                  });
            }
            return Promise.reject(error);
         }
      );

      setAxiosInstance(instance);
   }, [logOut]);

   return axiosInstance;
};

export default useAxiosInstance;
