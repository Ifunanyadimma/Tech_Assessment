
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png"
import { MdClose, MdDashboard } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";

// import Navbar from "./NavBar";




const Layout = () => {
  return (
    <div className="container">
      <div className="layout-flex"> 
        {/*Sidebar */}

        <div className="sidebar">
          <div className="top">
            <img className="logo" src={logo} alt="logo" />
            <MdClose />

          </div>
            <div className="container-link">
                
              
                    <Link className="link" to="/dashboard">
                    <MdDashboard />
                    <span>Dashboard</span>
                    </Link>
        
                    <Link className="link" to="/addContact">
                    <MdPermContactCalendar />
                    <span>Add Contact</span>
                    </Link>
                
            </div>
        </div>



      <div className="outlet-flex">
        <Outlet />
      </div>
    </div>
      </div>
            
  );
};

export default Layout;