/* eslint-disable no-unused-vars */
import React from 'react'
import Icon from './Icon'
import { RiLightbulbFlashFill } from "react-icons/ri";
import { BsCupHotFill } from "react-icons/bs";
import { GrSchedules } from "react-icons/gr";
import { ImHappy } from "react-icons/im";

const DashBoard = () => {
  return (
    <div className='rounded-3xl bg-back flex justify-between items-center m-8 p-10 max-sm:flex-col max-sm:gap-8 max-sm:justify-center max-sm:items-center'>
        <Icon text="Project Completed" data="4509" icon={<RiLightbulbFlashFill />}></Icon>
        <Icon text="Happy Clients" data="3500" icon={<ImHappy />}></Icon>
        <Icon text="Business Plan" data="2540" icon={<GrSchedules />}></Icon>
        <Icon text="Cups of Tea" data="1085" icon={<BsCupHotFill />}></Icon>
    </div>
  )
}

export default DashBoard
