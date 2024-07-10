
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdDashboard } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";


const Layout = () => {
  return (
    <div className="container">
      <div className="layout-flex"> 
        {/*Sidebar */}

        <div className="sidebar">
          <div className="top">
            <img className="logo" src={logo} alt="logo" />
            <GiHamburgerMenu /> 
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