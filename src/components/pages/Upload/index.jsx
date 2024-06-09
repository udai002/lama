import { useState } from 'react'
import UploadNav from '../../layout/UploadNav'
import './index.css'
import EmptyUploads from '../../layout/EmptyUploads'

const uploadStatus = {
    project:"PROJECT",
    widgetConfig:"WIDGET CONFIGURATION"
}

const ProjectView = ()=><div>
    <div className='upload-project-view-container'>
        <div className='upload-card'>
            <img src="youtube.png" className='youtube-logo' alt="youtube" />
            <div className='upload-card-details'>
                <p>Upload</p>
                <p>Youtube video</p>
            </div>
        </div>
        <div className='upload-card'>
            <img src="spotify.png" className='youtube-logo' alt="youtube" />
            <div className='upload-card-details'>
                <p>Upload</p>
                <p>Spofity podcast</p>
            </div>
        </div>
        <div className='upload-card'>
            <img src="ree.png" className='youtube-logo' alt="youtube" />
            <div className='upload-card-details'>
                <p>Upload from</p>
                <p>RSS Feed</p>
            </div>
        </div>
    </div>
    <EmptyUploads/>
</div>

const Upload = ()=>{
    const [active , setActive] = useState(uploadStatus.project)
    return <div>
        <div className="grid-container">
            <div className="grid-item upload-menu">
                <div className='upload-logo-container'>
                    <img src="lama.png" className='logo' alt="lama" />
                    <h1 className='logo'>LAMA.</h1>
                </div>
                <p className='upload-logo-para'>Podcast upload flow</p>
                <ul className='upload-menu-list'>
                    <li className='upload-menu-details active-menu'><span className='list-num active-list-num'>1</span>Projects</li>
                    <li className='upload-menu-details'><span className='list-num'>2</span>Widget Configuration</li>
                    <li className='upload-menu-details'><span className='list-num'>3</span>Deployment</li>
                    <li className='upload-menu-details'><span className='list-num'>4</span>Pricing</li>
                </ul>
            </div>
            <div className="grid-item">
                <UploadNav/>
                <ProjectView/>
            </div>
        </div>
    </div>
}


export default Upload 