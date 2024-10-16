import React from 'react'
import { Link, useParams } from 'react-router-dom'
import profiles from '../User'

const UserDetails = () => {
  let {name}=useParams()
  let person=profiles.find(profile=>profile.name==name)
  return (
    <div>
      <Link className='border px-3 py-1 m-5 absolute top-10 rounded-md bg-slate-800 text-white' to='/request'>Go Back</Link>
      <div className="mt-12 md:mt-32 mx-auto bg-gray-200  w-[90%] md:max-w-2xl rounded-md text-center p-6 shadow-xl md:text-start">
      <div className="md:flex justify-between items-center text-center md:text-start">
        <div className="md:flex gap-6 items-center text-center md:text-start">
          <div className="flex justify-center md:justify-start">
            <img
              src={person.image}
              alt=""
              className="w-40 h-40 rounded-full text-center"
            />
          </div>
          <div>
            <p className="text-lg font-semibold my-1">{person.name}</p>
            <p className="text-sm text-gray-600">{person.profession}</p>
            <p className="text-md text-gray-800">{person.description}</p>
            <div className='flex gap-3 justify-center md:justify-start my-3'>
          <p className='bg-slate-800 text-white px-4 py-1 rounded-md font-semibold'>{person.followers} Followers</p>
          <p className='bg-slate-800 text-white px-4 py-1 rounded-md font-semibold'>{person.following} Following</p>
        </div>
          </div>
         
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default UserDetails