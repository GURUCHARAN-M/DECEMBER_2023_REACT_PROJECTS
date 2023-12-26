import React from 'react'
import Home from './Home'
import About from './About'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

export default function RouteApp() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
