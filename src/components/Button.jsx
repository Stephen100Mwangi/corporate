/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text}) => {
  return (
    <button className={`bg-${color} rounded-full px-9 py-3 flex items-center text-white font-medium justify-center hover:shadow-lg max-sm:mx-auto max-md:mx-auto`}>
        {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'white',
  text: 'Button'
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string
}



export default Button
