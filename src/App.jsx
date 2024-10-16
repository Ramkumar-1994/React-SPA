import React from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Requests from './Pages/Requests'
import UserDetails from './Pages/UserDetails'
const App = () => {
  return (
    <div>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/request' element={<Requests/>} ></Route>
        <Route path='/:name' element={<UserDetails/>} ></Route>
      </Routes>
    </div>
  )
}

export default App