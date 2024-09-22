/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const ProjectCard = ({image,icon,title,project}) => {
  return (
    <div className='relative w-80 h-56 rounded-2xl m-8 hover:shadow-2xl max-sm:w-[90%] max-md:mx-auto max-md:'>
        <img loading='lazy' src={image} className="rounded-2xl w-full h-full object-cover" />
        <div className="absolute -bottom-4 left-4 bg-logo flex items-start justify-end p-5 w-56 h-28 hover:bg-titles hover:-translate-y-10 text-white rounded-2xl">
            <div className='size-4 rounded-full bg-logo shadow-2xl p-2 flex items-center justify-center'>{icon}</div>
            <div className='flex flex-col text-center justify-end items-center'>
              <div className='flex justify-end items-end text-end'>{title}</div>
              <div>{project}</div>
            </div>

        </div>
      
    </div>
  )
}

ProjectCard.defaultProps = {
    image: "",
    icon:"",
    title: "",
    project:""
}

ProjectCard.propTypes = {
    image: PropTypes.string,
    icon: PropTypes.element,
    title: PropTypes.string,
    project: PropTypes.string
}

export default ProjectCard




