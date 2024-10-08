/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card'
import Button from './Button'

const Working = () => {
  return (
    <div className='flex my-36 mx-8 place-items-start max-sm:flex-col max-sm:justify-center max-sm:gap-12 max-sm:items-center'>
        <div className="leftSection w-1/2 pr-10 max-sm:w-full max-sm:pr-0">
            <img loading='lazy' src="./working.png" className='scale-90' alt="" />
        </div>
        <div className="rightSection w-1/2 max-sm:w-full">
            <Card title="HOW IT WORKS" text="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but in which toil and pain can procure him." icon={<Button text="About Us" color="logo"></Button>}></Card>
        </div>
    </div>
  )
}

export default Working
