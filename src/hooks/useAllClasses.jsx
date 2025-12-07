import { useQuery } from "react-query";
import useAuth from "./useAuth";
import axios from "axios";
import { baseUrl } from "../API/api";

const useAllClasses = () => {
  const { user } = useAuth();
  const {
    data: classes,
    isLoading: loadingClasses,
    refetch: refetchClasses,
  } = useQuery(["classes", user?.email], async () => {
    const res = await axios.get(`${baseUrl}/classes`);
    return res.data;
  });
  return { classes, loadingClasses, refetchClasses };
};

export default useAllClasses;
