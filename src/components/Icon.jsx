/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({icon,data,text}) => {
  return (
    <div className='flex flex-col space-y-8 p-4 items-center justify-center'>
        <div className='text-7xl text-logo'>{icon}</div>
        <div className="flex flex-col space-y-">
            <h1 className='text-4xl text-center text-titles font-black'>{data}</h1>
            <p className='font-light text-center text-titles'>{text}</p>
        </div>
       
    </div>
  )
}

Icon.defaultProps = {
    icon: '',
    data: 0,
    text: ''

}

Icon.propTypes = {
    icon: PropTypes.element,
    data: PropTypes.number,
    text: PropTypes.string
}

export default Icon
