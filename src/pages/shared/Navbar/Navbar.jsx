import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { AiFillSetting } from "react-icons/ai";
import Toggle from "react-toggle";
import { FaMoon, FaSun } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
   {
      /* */
   }

   const navs = (
      <>
         <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-yellow-400" : "")}>
               Home
            </NavLink>
         </li>
         <li>
            <NavLink to="/instructors" className={({ isActive }) => (isActive ? "text-yellow-400" : "")}>
               Instructors
            </NavLink>
         </li>
         {/* <li tabIndex={0}>
            <details>
               <summary>Parent</summary>
               <ul className="p-2">
                  <li>
                     <a>Submenu 1</a>
                  </li>
                  <li>
                     <a>Submenu 2</a>
                  </li>
               </ul>
            </details>
         </li> */}
         <li>
            <a>Classes</a>
         </li>
      </>
   );

   const [toggle, setToggle] = useState(false);
   const [setting, setSetting] = useState(false);

   useEffect(() => {
      themeChange(false);
   }, []);

   return (
      <div>
         <div className="navbar bg-black bg-opacity-50 text-white z-30 text-xl font-semibold fixed max-w-screen-2xl">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-circle swap swap-rotate lg:hidden">
                     {/* this hidden checkbox controls the state */}
                     <input type="checkbox" onClick={() => setToggle(!toggle)} />

                     {/* hamburger icon */}
                     <svg
                        className="swap-off fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 512 512"
                     >
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                     </svg>

                     {/* close icon */}
                     <svg
                        className="swap-on fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 512 512"
                     >
                        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                     </svg>
                  </label>
                  <ul
                     tabIndex={1}
                     className={`menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${
                        !toggle && "hidden"
                     }`}
                  >
                     {navs}
                  </ul>
               </div>
               <a className="btn btn-ghost text-2xl">Translingua</a>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">{navs}</ul>
            </div>
            <div className="navbar-end">
               <details className="dropdown dropdown-end">
                  <summary className="btn btn-ghost text-xl" onClick={() => setSetting(!setting)}>
                     <AiFillSetting className={`${setting && "rotate-45"}`}></AiFillSetting>
                  </summary>
                  <ul className="p-2 shadow menu dropdown-content bg-black text-white rounded-box w-52">
                     <li>
                        <label>
                           {/* !TODO: Theme is not working */}
                           <Toggle
                              data-toggle-theme="dark,light"
                              data-act-class="ACTIVECLASS"
                              defaultChecked={true}
                              icons={{
                                 checked: <FaSun />,
                                 unchecked: <FaMoon />,
                              }}
                           />
                           <span>Theme</span>
                        </label>
                     </li>
                     <li>
                        <a>Item 2</a>
                     </li>
                  </ul>
               </details>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
