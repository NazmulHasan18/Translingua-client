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
