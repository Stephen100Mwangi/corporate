/* eslint-disable no-unused-vars */
import React from 'react'
import ProjectCard from './ProjectCard'
import { PiCaretRightBold } from "react-icons/pi";

const Projects = () => {
  return (
    <div id='services' className='flex flex-col space-y-8 my-40 mx-12'>
        <h1 className="text-titles font-black text-6xl w-1/2 max-sm:text-4xl max-sm:text-center max-sm:w-full">FINISHED PROJECTS</h1>
        <div className="flex justify-start space-x-5 font-sans max-sm:flex-col max-sm:space-x-0 max-sm:gap-y-5">
            <p className='text-logo'>All</p>
            <p className='text-back'>Architecture</p>
            <p className='text-back'>Building</p>
            <p className='text-back'>Construction</p>
            <p className='text-back'>Interior Design</p>
            <p className='text-back'>Isolation</p>
            <p className='text-back'>Plumbing</p>
        </div>
        <div className="projects flex flex-wrap gap-1">
          <div className="projects flex flex-wrap gap-1">
            <ProjectCard image="./suit.jpg" icon={<PiCaretRightBold />} title="Tailored Tech" project="Custom Software Solutions"></ProjectCard>
            <ProjectCard image="./kitchen.jpg" icon={<PiCaretRightBold className='text-white'/>} title="Recipe for Success" project="Innovative Web Applications"></ProjectCard>
            <ProjectCard image="./phone.jpg" icon={<PiCaretRightBold className='text-white'/>} title="Mobile Mastery" project="Mobile App Development"></ProjectCard>
            <ProjectCard image="./coffee.jpg" icon={<PiCaretRightBold className='text-white'/>} title="Brewing Innovation" project="Cutting-Edge Technology"></ProjectCard>
            <ProjectCard image="./weather.jpg" icon={<PiCaretRightBold className='text-red-500'/>} title="Forecasting Future" project="Predictive Analytics"></ProjectCard>
          </div>
        </div>
      
    </div>
  )
}

export default Projects
