import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";

import './index.css'


const Navbar = ()=>{
    return <div className="navbar-container">
        <div className="logo-container">
            <img src="lama.png" className="logo" alt="lama" />
        <h1 className="logo-heading">LAMA.</h1>
        </div>
        <div className="menu-container">
            <CiSettings className="setting"/>
            <IoIosNotificationsOutline className="notification"/>
        </div>
    </div>
}

export default Navbar 