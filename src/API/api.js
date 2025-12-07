import axios from "axios";
import { toast } from "react-toastify";

const token = localStorage.getItem("jwt-token");
// export const baseUrl = "http://localhost:4000/api";
export const baseUrl = "https://translingua-server2-0.vercel.app/api";

export const api = axios.create({
  baseURL: `${baseUrl}`,
});

export const apiInstance = axios.create({
  baseURL: `${baseUrl}`,
  headers: { Authorization: `Bearer ${token}` },
});

export const fetchQuotes = async () => {
  const res = await api.get("/classes/quotes");
  return res.data;
};

export const fetchInstructors = async () => {
  const res = await api.get("/instructors");
  return res.data;
};

export const fetchInstructorById = async (id) => {
  const res = await api.get(`/instructors/${id}`);
  return res.data;
};

export const fetchPopularClasses = async () => {
  const res = await api.get("/classes/popular");
  return res.data;
};

export const createUser = async (userData) => {
  api
    .post("/users", userData)
    .then(function (response) {
      if (response?.data) {
        toast.success("Class Booked Successful");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const addClass = async (id, email) => {
  api
    .post(
      `/students/select/${id}?email=${email}`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then(function (response) {
      console.log(response);
      if (response?.status === 201) {
        toast.success("Class Booked Successful");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getReviews = async () => {
  const res = await api.get("/reviews");
  return res.data;
};
