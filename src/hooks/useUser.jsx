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
      return (
         <>
            <span className="loading-lg loading loading-spinner text-primary"></span>
            <span className="loading-lg loading loading-spinner text-secondary"></span>
            <span className="loading-lg loading loading-spinner text-accent"></span>
            <span className="loading-lg loading loading-spinner text-neutral"></span>
            <span className="loading-lg loading loading-spinner text-info"></span>
            <span className="loading-lg loading loading-spinner text-success"></span>
            <span className="loading-lg loading loading-spinner text-warning"></span>
            <span className="loading-lg loading loading-spinner text-error"></span>
         </>
      );
   }
   return loggedUser;
};

export default useUser;
