import axios from "axios";
import Swal from "sweetalert2";

const api = axios.create({
   baseURL: "http://localhost:5000",
});

const token = localStorage.getItem("jwt-token");

export const fetchQuotes = async () => {
   const res = await api.get("/quotes");
   return res.data;
};

export const fetchInstructors = async () => {
   const res = await api.get("/instructors");
   return res.data;
};

export const fetchInstructorById = async (id) => {
   const res = await api.get(`/instructor/${id}`);
   return res.data;
};
export const fetchClasses = async () => {
   const res = await api.get("/classes");
   return res.data;
};
export const fetchPopularClasses = async () => {
   const res = await api.get("/popular_classes");
   return res.data;
};

export const fetchUser = async (email) => {
   if (email) {
      const res = await api.get(`/user/${email}`, {
         headers: { authorization: `'userBearer ${token}` },
      });
      return res.data;
   }
};

export const createUser = async (userData) => {
   api.post("/users", userData)
      .then(function (response) {
         console.log(response);
      })
      .catch(function (error) {
         console.log(error);
      });
};

export const addClass = async (id, email) => {
   api.post(
      `/selected_class/${id}?email=${email}`,
      {},
      {
         headers: { authorization: `'classBearer ${token}` },
      }
   )
      .then(function (response) {
         console.log(response);
         if (response?.data?.insertedId) {
            Swal.fire({
               position: "top-end",
               icon: "success",
               title: `Class Booked Successful`,
               showConfirmButton: false,
               timer: 1000,
            });
         }
      })
      .catch(function (error) {
         console.log(error);
      });
};

export const getClasses = async (email) => {
   const res = await api.get(`/selected_classes?email=${email}`, {
      headers: { authorization: `'classBearer ${token}` },
   });
   return res.data;
};
export const deleteClass = async (id, email, refetch) => {
   const res = await api.delete(`/selected_class/${id}?email=${email}`, {
      headers: { authorization: `'classBearer ${token}` },
   });
   if (res.data.deletedCount >= 1) {
      refetch();
      Swal.fire({
         position: "top-end",
         icon: "success",
         title: `Deleted Successful`,
         showConfirmButton: false,
         timer: 1000,
      });
   }
   console.log(res.data);
   return res.data;
};
