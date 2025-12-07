import { useQuery } from "react-query";
import useAuth from "./useAuth";
import axios from "axios";
import { baseUrl } from "../API/api";

const useInstructorClasses = () => {
  const { user } = useAuth();
  const token = localStorage.getItem("jwt-token");
  const {
    data: classes,
    isLoading: loadingClasses,
    refetch: refetchClasses,
  } = useQuery(["classes", user?.email], async () => {
    const res = await axios.get(`${baseUrl}/instructor_classes/${user?.email}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  });
  return { classes, loadingClasses, refetchClasses };
};

export default useInstructorClasses;
