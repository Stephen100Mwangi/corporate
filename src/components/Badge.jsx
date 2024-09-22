/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const Badge = ({icon,title,text}) => {
  return (
    <div className='border-[1px] border-black-500 rounded-3xl px-5 py-8 flex flex-col space-y-10 hover:shadow-2xl hover:{title}:text-green-500 items-center justify-center max-sm:min-w-[300px]'>
        <div className="icon text-logo text-7xl">{icon}</div>
        <div className="flex flex-col space-y-6">
            <h1 className='text-titles text-2xl w-1/2 font-extrabold text-left max-md:w-full max-md:text-center max-sm:w-full max-sm:text-center max-sm:text-xl'>{title}</h1>
            <p className='text-black font-light'>{text}</p>
        </div>
       
      
    </div>
  )
}

Badge.defaultProps = {
  icon: '',
  title: '',
  text: ''
}

Badge.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  text: PropTypes.string
}

export default Badge
