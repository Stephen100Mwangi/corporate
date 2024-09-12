/* eslint-disable no-unused-vars */
import React, { useState} from 'react'
import Logo from './Logo'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseCircleSharp } from "react-icons/io5";

const NavBar = () => {
    const [sidebar,setSideBar] = useState(false)
  return (
    <div className='flex justify-between w-full p-6 relative max-sm:pt-10'>
        <Logo></Logo>
        
        <div className="menu cursor-pointer">
                <HiOutlineMenuAlt3  className='w-6 h-6' onClick={() => setSideBar(!sidebar)}/>
            </div>

        <div className="circle bg-titles h-[200px] w-[200px] rounded-full absolute -top-40 right-52"></div>

        {/* Overlay */}
        {
            sidebar && (
                <div className="flex flex-col items-end w-fit bg-titles rounded-bl-lg text-white h-fit text-right absolute top-0 right-0 space-y-5 p-5">
                    <div className="hamburger cursor-pointer"><IoCloseCircleSharp className='w-6 h-6 text-white' onClick={() => setSideBar(!sidebar)}/></div>
                    <ul className='flex flex-col space-y-2 gap-y-5 items-end'>
                        <li className=' text-white cursor-pointer'>Home</li>
                        <li className=' text-white cursor-pointer'>About</li>
                        <li className=' text-white cursor-pointer'>Services</li>
                        <li className=' text-white cursor-pointer'>Contact</li>
                        <li className=' text-white cursor-pointer'>Blog</li>
                    </ul>
                </div>
            )
        }
        
      
    </div>
  )
}

export default NavBar
