import EmptyProject from "../../layout/EmptyProject"
import Navbar from "../../layout/Navbar"
import { VscHome } from "react-icons/vsc";

import './index.css'

const Project = ()=>{
    return <div>
        <Navbar/>
        <div className="project-container">
            <button className="btn-back"><VscHome className="home-icon"/><span className="home-back-content">Back to Home</span></button>
        <EmptyProject/>
        </div>
    </div>
}

export default Project
