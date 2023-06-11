import { Link, NavLink } from "react-router-dom";
import { fetchUser } from "../../../API/api";
import { useQuery } from "react-query";
import useAuth from "../../../hooks/useAuth";
// import useUser from "../../../hooks/useUser";

const DashboardNavbar = () => {
   const { user } = useAuth();
   const { data: loggedUser, isLoading } = useQuery(["/user"], () => fetchUser(user?.email));

   if (isLoading) {
      return <div>Loading</div>;
   }

   // const loggedUser = useUser();
   // console.log(loggedUser);
   const role = loggedUser?.role;

   const navLink = (
      <>
         {role === "user" ? (
            <>
               <li>
                  <NavLink
                     to="/dashboard/my_classes"
                     className={({ isActive }) => (isActive ? "text-yellow-200" : "")}
                  >
                     My Classes
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/dashboard/selected_classes"
                     className={({ isActive }) => (isActive ? "text-yellow-200" : "")}
                  >
                     Selected Classes
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/dashboard/payment_history"
                     className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
                  >
                     Payment History
                  </NavLink>
               </li>
            </>
         ) : role === "instructor" ? (
            <>
               <li>
                  <NavLink
                     to="/dashboard/instructor_classes"
                     className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
                  >
                     My Classes
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/dashboard/add_class"
                     className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
                  >
                     Add A Class
                  </NavLink>
               </li>
            </>
         ) : (
            role === "admin" && (
               <>
                  <li>
                     <a>Item 1</a>
                  </li>
                  <li>
                     <a>Parent</a>
                  </li>
                  <li>
                     <a>Item 3</a>
                  </li>
               </>
            )
         )}
      </>
   );

   return (
      <div className="navbar flex-col lg:flex-row text-white bg-orange-600">
         <div className="navbar-start">
            <h2 className="text-3xl font-bold">Translingua</h2>
            <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </label>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
               >
                  {navLink}
               </ul>
            </div>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLink}</ul>
         </div>
         <div className="navbar-end gap-4">
            <Link to="/">Home</Link>
            <Link to="/classes">Classes</Link>
            <Link to="/Instructors">Instructors</Link>
            <Link to="/profile">
               <label title={loggedUser?.name} tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                     <img src={loggedUser?.user_image} />
                  </div>
               </label>
            </Link>
         </div>
      </div>
   );
};

export default DashboardNavbar;
