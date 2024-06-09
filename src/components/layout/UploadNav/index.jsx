import './index.css'

import { CiHome } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";

const UploadNav = ()=>{
    return <div className='upload-nav-container'>
        <div><p className='upload-navigator'><CiHome className='home-icon' />/Sample Project/<span className='current-position'>upload</span></p></div>
        <div className='upload-nav2'>
        <div className='language-container'><IoMdArrowDropdown /> <span>EN</span> <img src="usa.png" className='language-img' alt="usa" /></div><IoIosNotificationsOutline className='upload-notification'/>
        </div>
    </div>
}

export default UploadNav