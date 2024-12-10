import React from 'react'
import es1 from '../assets/EsLOL.png'
import es2 from '../assets/EsVAL.png'

const Esport = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#272626]">
      <h1 className="text-5xl font-bold p-9 text-white">Esport</h1>
      <div className="flex flex-wrap justify-center gap-6">
        <img src={es1} alt="riot games" width={750} className=" cursor-pointer hover:outline outline-4 outline-white rounded-md"/>
        <img src={es2} alt="riot games" width={750} className=" cursor-pointer hover:outline outline-4 outline-white rounded-md"/>
      </div>
    </div>
  )
}

export default Esport