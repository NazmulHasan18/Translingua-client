import axios from "axios";

const api = axios.create({
   baseURL: "http://localhost:5000",
});

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
