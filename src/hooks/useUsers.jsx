import { useQuery } from "react-query";
import useAuth from "./useAuth";
import axios from "axios";
import { baseUrl } from "../API/api";

const useUsers = () => {
  const { user } = useAuth();
  const token = localStorage.getItem("jwt-token");
  const {
    data: users,
    isLoading: loadingUsers,
    refetch: refetchUsers,
  } = useQuery(["users", user?.email], async () => {
    const res = await axios.get(`${baseUrl}/users?email=${user?.email}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  });
  return { users, loadingUsers, refetchUsers };
};

export default useUsers;
