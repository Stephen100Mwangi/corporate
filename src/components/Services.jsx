/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card'
import Button from './Button'
import Badge from './Badge'

import { GrSchedule } from "react-icons/gr";
import { PiHandCoinsFill } from "react-icons/pi";
import { RiCustomerService2Fill } from "react-icons/ri";

const Services = () => {
  return (
    <div className='flex mx-8 my-40 gap-16 max-sm:flex-col max-sm:gap-y-20 max-md:flex-col max-lg:bg-slate-300 max-lg:flex-col'>
        <div className="flex flex-col w-1/4 max-sm:w-full max-md:w-full max-lg:w-full max-lg:rounded-lg max-lg:p-4">
            <Card text="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give , or avoids pleasure itself, because it." icon={<Button text="Show More" color="logo"></Button>} title="OUR SERVICES"></Card>
        </div>
        <div className="flex flex-row items-center justify-between gap-16 max-sm:flex-col max-md:flex-col max-sm:flex max-md:flex-wrap">
            <Badge icon={<GrSchedule />} title="BUSINESS PLANNING"></Badge>
            <Badge icon={<RiCustomerService2Fill />} title="BUSINESS CONSULTANCY"></Badge>
            <Badge icon={<PiHandCoinsFill />} title="FINANCIAL SERVICES"></Badge>
        </div>
      
    </div>
  )
}

export default Services

