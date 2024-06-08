import './index.css'

const NewProject = ()=><>
    
        <form>
            <div className="create-container">           
        <h2 className="create-heading">Create Project</h2>
        <div className="creat-input-container">
            <label htmlFor="create">Enter Project Name:</label><br />
            <input type="text" id="create" className="create-input" placeholder='Type here' />
        </div>
        <div className='create-btn-container'>
            <button className='cancel create-btn' type='button'>Cancel</button>
            <button className='submit create-btn' type='submit'>Create</button>
        </div>
        </div>
        </form>
</>

export default NewProject