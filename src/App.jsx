import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Project from './components/pages/Project'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Upload from './components/pages/Upload'

function App() {
  const [count, setCount] = useState(0)

  const [projects , setProjects] = useState({dataSet : []})

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Project projects= {projects} updateProjects={setProjects}/>} />
          <Route path='/upload' Component={Upload} />
        </Routes>
        {/* <Project/> */}
      </BrowserRouter>
    </>
  )
}

export default App
