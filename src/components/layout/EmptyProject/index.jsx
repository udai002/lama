import { BsPlusCircleFill } from "react-icons/bs";

import './index.css'

const EmptyProject = ()=>{
    return <div className='empty-container'>
      
        <h1 className='empty-heading'>Create a New Project </h1>
        <img className='group-img' src="group.png" alt="group" />
        <p className='empty-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
        <div className="empty-btn-container">
        <button className='empty-btn'><BsPlusCircleFill className="empty-plus"/><span>Create New Project</span></button>
        </div>
    </div>
}

export default EmptyProject