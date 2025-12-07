import { useQuery } from "react-query";
import useAuth from "./useAuth";
import axios from "axios";
import { baseUrl } from "../API/api";

const useRole = () => {
  const { user } = useAuth();
  const token = localStorage.getItem("jwt-token");

  const { data: loggedUser, isLoading: roleLoading } = useQuery(["role", user?.email], async () => {
    const res = await axios.get(`${baseUrl}/users/${user?.email}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  });
  const role = loggedUser?.role;
  return { loggedUser, role, roleLoading };
};

export default useRole;
