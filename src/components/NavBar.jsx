import logo from './logo.png';
import { MdDashboard } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";


const Navbar = () => {
    return (
        <div className= "sidebar active">
            <img src={logo} alt="logo" />
    
            <ul>
                <li>
                    <a href=" / ">
                    <MdDashboard />
                    Dashboard
                    </a>
                </li>

                <li>
                    <a href=" / ">
                    <MdPermContactCalendar />
                    Add Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;