import { useState } from 'react'
import './index.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'

import {Home} from './Home'
import {Report} from './Report'
import {Login} from './Login'
import { Layout } from './Layout'

function App() {
  return(
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Login/>}/> 
          <Route path="/home" element={<Home/>}/> 
          <Route path="/report" element={<Report/>}/> 
        </Route>
      </Routes>
    </Router>
    )
}

export default App
