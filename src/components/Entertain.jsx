import React from 'react'
import en1 from '../assets/EnARCANE.png'
import en2 from '../assets/EnMUSIC.png'

const Entertain = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#272626]">
      <h1 className="text-5xl font-bold p-9 text-white">Entertaiment</h1>
      <div className="flex flex-wrap justify-center gap-6">
        <img src={en1} alt="riot games" width={600} className=" cursor-pointer hover:outline outline-4 outline-white rounded-md"/>
        <img src={en2} alt="riot games" width={600} className=" cursor-pointer hover:outline outline-4 outline-white rounded-md"/>
      </div>
    </div>
  )
}

export default Entertain