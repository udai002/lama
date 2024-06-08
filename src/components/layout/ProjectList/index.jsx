import Modal from '../Modal'
import { BsPlusCircleFill } from "react-icons/bs";
import NewProject from '../NewProject';

import './index.css'

const BtnText = ()=><><BsPlusCircleFill className="create-plus"/><span>Create New Project</span></>

const ProjectDetails = ()=>{
    return <div className='project-details-container'>
        <div className='project-details-heading'><h1>SP</h1></div>
        <div className='project-details'>
            <h2 className='details-heading'>Sample Project</h2>
            <p className='details-para '>4 Episodes</p>
            <small className='details-time'>Last Edited 4h ago</small>
        </div>
    </div>
}

const ProjectList = ()=>{
    return <div>
        <div className='project-header'>
        <h1 className='project-heading'>Projects</h1>
        <Modal btnClass="project-create-btn" btnText={<BtnText/>} modalContent={<NewProject/>} />
        </div>
        <div className='project-list-container'>
            <ProjectDetails/>
            <ProjectDetails/>
            <ProjectDetails/>
            <ProjectDetails/>
            <ProjectDetails/>
        </div>
    </div>
}

export default ProjectList