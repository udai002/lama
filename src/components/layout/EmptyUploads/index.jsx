import './index.css'

const EmptyUploads = ()=>{
 return <div>
    <p className="empty-divder">or</p>
    <div className='empty-upload-input-container'>
         <img src="cloud.png" alt="upload cloud" />
         <p>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
         <p className='para2'>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file </p>
         <div className=''>
         <label htmlFor="file" className='empty-upload-btn'>Select File</label>
         <input type='file' id='file' className='empty-input-file'/>
         </div>
    </div>
 </div>
}

export default EmptyUploads