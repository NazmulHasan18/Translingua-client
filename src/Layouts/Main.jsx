import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";
import { useEffect, useState } from "react";
import AOS from "aos";

const Main = () => {
   const location = useLocation().pathname;
   const [hide, setHide] = useState(false);

   useEffect(() => {
      AOS.init();
   }, []);

   useEffect(() => {
      if (location === "/login" || location === "/register") {
         setHide(true);
      } else {
         setHide(false);
      }
   }, [location]);

   return (
      <div className="max-w-screen-2xl mx-auto">
         {hide || <Navbar></Navbar>}
         <Outlet></Outlet>
         {hide || <Footer></Footer>}
      </div>
   );
};

export default Main;
