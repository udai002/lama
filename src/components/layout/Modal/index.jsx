import { useState } from "react"
import { IoClose } from "react-icons/io5";

import './index.css'

const Modal = (props)=>{
    const {btnClass , btnText , modalContent } = props
    const [openModal , setOpenModal] = useState(false)
    return <div>
        <div><button className={`${btnClass}`} onClick={()=>setOpenModal(true)}>{btnText}</button></div>
        {openModal?<div className="modal">
            <div className="overlay" onClick={()=>setOpenModal(false)}></div>
            <div className="modal-content">
                <div className="modal-close"><IoClose onClick={()=>setOpenModal(false)} /></div>
                {modalContent}
            </div>
        </div>:""}
    </div>
}

export default Modal 