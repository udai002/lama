import EmptyProject from "../../layout/EmptyProject"
import Navbar from "../../layout/Navbar"
import { VscHome } from "react-icons/vsc";

import './index.css'
import ProjectList from "../../layout/ProjectList";

const Project = (props)=>{
    const {projects , updateProjects} = props
    return <div>
        <Navbar/>
        <div className="project-container">
            <button className="btn-back"><VscHome className="home-icon"/><span className="home-back-content">Back to Home</span></button>
        {projects.dataSet.length ===0?<EmptyProject projects={projects} updateProjects={updateProjects} />:<ProjectList projects={projects} updateProjects={updateProjects}/>}
        </div>
    </div>
}

export default Project
