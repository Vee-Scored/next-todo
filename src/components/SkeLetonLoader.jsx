'use client'
import React from 'react'

const SkeLetonLoader = () => {
  return (
    <div className="w-full">
    <div className="animate-pulse flex flex-col space-y-2">
    <div className="h-10 border flex items-center pl-3 ">
        <p className='h-2 w-2/3 bg-white'></p>
      </div>
      <div className="h-10 border flex items-center pl-3 ">
        <p className='h-2 w-2/3 bg-white'></p>
      </div>
      <div className="h-10 border flex items-center pl-3 ">
        <p className='h-2 w-2/3 bg-white'></p>
      </div>
    </div>
  </div>
  
  )
}

export default SkeLetonLoader