import React from 'react'
import Card from '../components/Card'
import profiles from '../User'
const Requests = () => {
  return (
    <div>
      <div className="md:mt-12 mx-auto md:max-w-xl w-[90%] rounded-md p-6 ">
        <h1 className='font-semibold text-2xl'>Your Follow Requests</h1>
        <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias fuga facilis aperiam.</p>
        <div className="mt-6">
          {
            profiles.map((profile,idx)=>
            {
              return <Card name={profile.name} username={profile.username} desc={profile.description} img={profile.image} prof={profile.profession}/>
            })
          }
      </div>
      </div>
    </div>
  )
}

export default Requests