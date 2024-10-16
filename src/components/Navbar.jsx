import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className="bg-slate-800 p-3 text-white">
          <div className='max-w-4xl mx-auto flex justify-between items-center px-6'>
            <Link to='/' className='font-bold text-xl'>ReactSPA</Link>
            <div className='flex gap-3 font-semibold'>
              <Link to='/about'>About Us</Link>
              <Link to='/request'>Requests</Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar