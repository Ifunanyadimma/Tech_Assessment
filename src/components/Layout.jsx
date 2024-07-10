
import { Link, Outlet } from "react-router-dom";
// import logo from './logo.png';
import { MdDashboard } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";

// import Navbar from "./NavBar";




const Layout = () => {
  return (
    <div>
      {/* <div className= "sidebar active"> */}
            {/* <img src={logo} alt="logo" /> */}
            {/* </div> */}
    
      <div>
        {/* <Navbar /> */}
      </div>
      
      {/*Mother flex */}

      <div className="layout-flex"> 
        {/*Sidebar */}

        <div className="sibebar active">
            <ul>
                <li>
                <MdDashboard />
                    <Link to="/dashboard">Dashboard</Link>
                </li>

                <br />

                <li>
                <MdPermContactCalendar />
                    <Link to="/addContact">Add Contact</Link>
                </li> 
            </ul>
        </div>



      <div className="outlet-flex">
        <Outlet />
      </div>
    </div>
      </div>
            
  );
};

export default Layout;