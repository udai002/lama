import Modal from '../Modal'
import { BsPlusCircleFill } from "react-icons/bs";
import NewProject from '../NewProject';

import './index.css'
import { Link } from 'react-router-dom';

const BtnText = ()=><><BsPlusCircleFill className="create-plus"/><span>Create New Project</span></>

const ProjectDetails = (props)=>{
    const {projectItems} = props
    const {name , datetime} = projectItems
    return <Link to={'/upload'} className='project-link'><div className='project-details-container'>
        <div className='project-details-heading'><h1>SP</h1></div>
        <div className='project-details'>
            <h2 className='details-heading'>{name}</h2>
            <p className='details-para '>4 Episodes</p>
            <small className='details-time'>Last Edited 4h ago</small>
        </div>
    </div></Link>
}

const ProjectList = (props)=>{
    const {projects  , updateProjects} = props
    return <div>
        <div className='project-header'>
        <h1 className='project-heading'>Projects</h1>
        <Modal btnClass="project-create-btn" btnText={<BtnText/>} modalContent={<NewProject projects={projects} updateProjects={updateProjects} />} />
        </div>
        <div className='project-list-container'>
            {projects.dataSet.map(item=> <ProjectDetails projectItems = {item}/>)}
        </div>
    </div>
}

export default ProjectList