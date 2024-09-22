/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from './Logo';
import Button from './Button'
import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { TfiTwitter } from "react-icons/tfi";
import { IoWifi } from "react-icons/io5";
import { PiCopyrightThin } from "react-icons/pi";
import { IoMdAdd } from "react-icons/io";
import { RiAddFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div id='footer' className='flex flex-col space-y-16 m-16 mx-8'>
        <div className="flex rounded-3xl bg-back bg-opacity-10 justify-between items-center p-16 px-8 my-16 max-sm:flex-col max-sm:gap-y-12 max-md:flex-col max-md:gap-y-10">
            <div className="flex flex-col items-center justify-center space-y-0 hover:text-logo text-back">
                <div className='font-black text-4xl tracking-tighter'>SWEETY</div>
                <div className='font-semibold tracking-[10px] text-xs'>CAFETERIA</div>
            </div>

            <div className="flex flex-col space-y-1 items-center justify-center hover:text-logo text-back">
                <div className="font-medium tracking-[5px]">
                    DESIGNLOVERS
                </div>
                <div className="font-semibold h-[2px] w-48 bg-back hover:bg-logo">
                </div>
                <div className="font-semibold tracking-[8px]">
                    GEEKHEAVEN
                </div>
            </div>

            
            <fieldset className='flex items-center justify-center p-2 px-8 relative border-back border-[1px] -z-100 hover:text-logo text-back'>
                <legend className='text-xs text-center'>ICE CREAM BAR</legend>
                <h1 className='text-2xl font-medium tracking-[4px]'>CHIPPY'S</h1>
            </fieldset>

            <div className="flex flex-col space-y-0 items-center justify-center hover:text-logo text-back">
                <div className="font-bold text-3xl">GOLDEN</div>
                <div className="font-thin rotate-180 text-3xl">GOLDEN</div>
            </div>
            <div className="flex font-bold text-3xl hover:text-logo text-back">GOLDENGRID</div>
        </div>
        <form>
            
        </form>

        <div className="flex flex-row gap-20 p-16 my-16 bg-titles rounded-3xl py-20 bg-opacity-90 relative max-sm:flex-col max-sm:gap-y-24 max-md:flex-col max-md:gap-y-20">
            <div className="absolute size-8 -top-4 bg-logo rounded-full"></div>
            <div className="absolute size-24 -bottom-10 left-[35%] bg-logo rounded-full"></div>
            <RiAddFill className='absolute text-logo text-4xl rotate-0 font-bold right-[20%] -top-5'></RiAddFill>

            <div className="w-1/2 flex justify-between items-center max-sm:flex max-sm:flex-col max-sm:gap-y-12 max-sm:text-center max-sm:w-full max-sm:justify-center max-sm:items-center">
                <div className="flex flex-col space-y-10">
                    <Logo></Logo>
                    <div className="flex space-x-5 max-sm:flex max-sm:justify-center">
                        <FiFacebook></FiFacebook>
                        <SlSocialLinkedin></SlSocialLinkedin>
                        <TfiTwitter></TfiTwitter>
                        <IoWifi></IoWifi>
                    </div>
                </div>
                <div className='flex flex-col space-y-5 text-white font-normal max-sm:justify-center max-sm:items-center max-sm:gap-y-10 max-md:justify-center max-md:gap-y-12'>
                    <div className="flex items-center space-x-4">
                        <div className="bg-logo size-2 rounded-full hidden"></div>
                        <h1 className='hover:text-logo cursor-pointer'>Automotive Parts & System</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="bg-logo size-2 rounded-full hidden"></div>
                        <h1 className='hover:text-logo cursor-pointer'>Power & Energy</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="bg-logo size-2 rounded-full hidden"></div>
                        <h1 className='hover:text-logo cursor-pointer'>Aero Space</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="bg-logo size-2 rounded-full hidden"></div>
                        <h1 className='hover:text-logo cursor-pointer'>Ship Building Industry</h1>
                    </div>
                </div>
            </div>
            <hr className='sm:hidden'/>
            <div className="w-1/2 flex items-center justify-between max-sm:w-full max-sm:text-center max-sm:justify-center max-sm:items-center max-sm:flex-col max-sm:gap-y-12">
                <div className='flex flex-col space-y-5 text-white font-normal max-sm:justify-center max-sm:text-center max-sm:items-center max-sm:gap-y-10'>
                    <div className="flex items-center space-x-4">
                        <div className="bg-logo size-2 rounded-full hidden"></div>
                        <h1 className='hover:text-logo cursor-pointer'>Adventures</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="bg-logo size-2 rounded-full hidden"></div>
                        <h1 className='hover:text-logo cursor-pointer'>Expert Interview</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="bg-logo size-2 rounded-full hidden"></div>
                        <h1 className='hover:text-logo cursor-pointer'>Remodelling</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="bg-logo size-2 rounded-full hidden"></div>
                        <h1 className='hover:text-logo cursor-pointer'>Roofing</h1>
                    </div>
                </div>

                <Button text="Contact Us" color="logo"></Button>

            </div>
        </div>

        <div className="flex w-full items-center justify-center space-x-1 max-sm:flex max-sm:flex-col max-sm:gap-y-8">
            <PiCopyrightThin></PiCopyrightThin>
            <p className='font-light'>2024 Steve Corporate.</p>
            <p className='font-light'>All Rights Reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer
