/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const Card = ({text,title,icon}) => {
  return (
    <div className='flex flex-col space-y-10'>
        <h1 className='text-titles text-5xl w-3/5 font-black max-sm:w-full max-sm:text-center max-sm:text-4xl'>{title}</h1>
        <p>{text}</p>
        <div>{icon}</div>
    </div>
  )
}

Card.defaultProps = {
  text: 'Text',
  title: 'Title'
}

Card.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.element

}

export default Card
