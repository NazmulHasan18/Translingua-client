import { useQuery } from "react-query";
import useAuth from "../../hooks/useAuth";
import { fetchUser } from "../../API/api";
import { Navigate } from "react-router-dom";

const InstructorRoute = ({ children }) => {
   const { user, loading } = useAuth();
   const { data: loggedUser, isLoading } = useQuery(["/user"], () => fetchUser(user?.email));
   if (loading) {
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

   const role = loggedUser?.role;

   if (user && role === "instructor") {
      return children;
   }

   return <Navigate to="/" replace={true}></Navigate>;
};

export default InstructorRoute;
