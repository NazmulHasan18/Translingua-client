import { useQuery, useQueryClient } from "react-query";
import { fetchUser } from "../API/api";
import { useEffect } from "react";
import useAuth from "./useAuth";

const useUser = () => {
   const queryClient = useQueryClient();
   const { user } = useAuth();

   const { data: loggedUser, isLoading } = useQuery(["/user", user?.email], () => fetchUser(user?.email), {
      enabled: false,
   });
   useEffect(() => {
      if (user) {
         queryClient.prefetchQuery(["/user", user?.email], () => fetchUser(user?.email));
      }
   }, [user, queryClient]);
   if (isLoading) {
      return null;
   }
   return loggedUser;
};

export default useUser;
