import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Project from './components/pages/Project'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Upload from './components/pages/Upload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Project} />
          <Route path='/upload' Component={Upload} />
        </Routes>
        {/* <Project/> */}
      </BrowserRouter>
    </>
  )
}

export default App
