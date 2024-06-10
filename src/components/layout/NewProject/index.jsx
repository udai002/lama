import { useState } from 'react'
import './index.css'

const NewProject = (props)=>{

const {projects , updateProjects} =  props
const [projectName , setProjectName] = useState('')
const [Error , setError] = useState(false)

const onFormSubmit = e=>{
    e.preventDefault()
    const {dataSet} = projects
    if(projectName !==""){
        setError(false)
        const newData = {
            projectId:Date.now(),
            name:projectName,
            dateTime:Date.now(),
        }
        updateProjects({dataSet:[...dataSet , newData ]})
    }else{
        setError(true)
    }
    
}

return <>
    
        <form onSubmit={onFormSubmit}>
            <div className="create-container">           
        <h2 className="create-heading">Create Project</h2>
        <div className="creat-input-container">
            <label htmlFor="create">Enter Project Name:</label><br />
            <input type="text" id="create" className="create-input" placeholder='Type here' onChange={(e)=>setProjectName(e.target.value)} />
        </div>
        {Error?<p className='error-msg'>Project Name can't be Empty</p>:""}
        <div className='create-btn-container'>
            <button className='cancel create-btn' type='button'>Cancel</button>
            <button className='submit create-btn' type='submit'>Create</button>
        </div>
        </div>
        </form>
</>
}

export default NewProject