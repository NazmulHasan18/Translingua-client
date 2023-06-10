import { useQuery } from "react-query";
import { fetchUser } from "../API/api";

const useUser = (email) => {
   const { data: user, isLoading } = useQuery(["/user", email], () => fetchUser(email));
   if (isLoading) return;
   return user;
};

export default useUser;
