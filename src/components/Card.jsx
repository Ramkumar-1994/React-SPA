import React, { useState } from "react";
import { Link } from "react-router-dom";
const Card = ({name,img,desc,username,prof}) => {
  const[follow,setFollow]=useState(false)

  function followHandler()
  {
      setFollow(prev=>!prev)
  }
  return (
    <div>
      <Link className="cursor-pointer" to={`/${name}`}>
      <div className="border border-gray p-3 md:p-3 rounded-lg text-center mb-3 md:text-start">
        <div className="md:flex justify-between items-center md:text-start text-center">
        <div className="md:flex gap-3 items-center text-center">
          <div className="flex justify-center">
            <img
              src={img}
              alt=""
              className="w-16 h-16 rounded-full text-center"
            />
          </div>
          <div>
            <p className="text-lg font-semibold my-1">{name}</p>
            <p className="text-sm text-gray-600">{prof}</p>
            <p className="text-md text-gray-800">{desc}</p>
          </div>
        </div>
        <div>
          <button className="bg-slate-800 py-1 px-6 text-white rounded-md my-2" onClick={followHandler}>{follow?"Following":"Follow"}</button>
        </div>
        </div>
        
      </div>
      </Link>
    </div>
  );
};

export default Card;
