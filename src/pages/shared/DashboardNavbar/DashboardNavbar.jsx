import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";

const DashboardNavbar = () => {
   const { user, loading } = useAuth();

   const loggedUser = useUser(user?.email);
   if (loading) {
      return;
   }

   const role = loggedUser?.role;

   const navLink = (
      <>
         {role === "user" ? (
            <>
               <li>
                  <a>My Class</a>
               </li>
               <li>
                  <a>Booked Class</a>
               </li>
               <li>
                  <a>Payment History</a>
               </li>
            </>
         ) : role === "instructor" ? (
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
         ) : (
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
