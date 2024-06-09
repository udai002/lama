import UploadNav from '../../layout/UploadNav'
import './index.css'

const Upload = ()=>{
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
            </div>
        </div>
    </div>
}


export default Upload 