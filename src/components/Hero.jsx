/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './Button'
import Floater from './Floater'

import { GrAppsRounded } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TbLogout } from "react-icons/tb";

const Hero = () => {
  return (
    <div className='w-full relative flex my-8 p-8 pr-0 mb-[500px] max-sm:mb-36 max-sm:flex-col'>
        <div className="leftHero flex flex-col space-y-6 relative w-1/3 max-sm:w-full max-sm:gap-y-5">
            <div className="flex flex-col space-y-2 max-sm:gap-10">
                <h1 className='text-titles font-extrabold'>WE ARE HERE FOR</h1>
                <h1 className='text-titles text-8xl sourceSans3 font-black max-sm:text-5xl'>THE LARGEST BUSINESS EXPERT</h1>
            </div>
           
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the.</p>
            <div className='flex justify-between w-full items-center'>
                <Button color='titles' text='Get Started'></Button>
                <Button color='logo' text='Explore More'></Button>
            </div>
        </div>
        <div className="rightHero w-2/3 relative overflow-x-clip max-sm:w-full max-sm:hidden">
            <img src="./hero.png" alt=""  className='absolute -right-20 -top[2400px] w-[90%] scale-90' />
        </div>

        <div className="floaters flex flex-col space-y-3 absolute right-0 top-[10%]">
            <Floater icon={<GrAppsRounded />} text="Browse Demos"></Floater>
            <Floater icon={<HiOutlineShoppingBag />} text="Buy Now"></Floater>
            <Floater icon={<TbLogout />} text="Export Section"></Floater>
        </div>
      
    </div>
  )
}

export default Hero
