import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../shared/DashboardNavbar/DashboardNavbar";
import Footer from "../../shared/Footer/Footer";

const Dashboard = () => {
   return (
      <div>
         <DashboardNavbar></DashboardNavbar>
         <h2>dashboard</h2>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Dashboard;
