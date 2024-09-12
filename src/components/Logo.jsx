/* eslint-disable no-unused-vars */
import React from 'react'

const Logo = () => {
  return (
    <div className="logo flex space-x-3">
        <div className="flex items-center justify-center text-center bg-logo text-white font-bold rounded-full h-14 w-14 text-5xl overflow-clip">SC</div>
        <div className="flex flex-col space-y-1">
            <h1 className='font-normal text-titles'>STEVE</h1>
            <h1 className='text-logo font-medium'>CORPORATE</h1>
        </div>
    </div>
  )
}

export default Logo
