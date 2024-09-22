/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card'
import Button from './Button'

const Team = () => {
  return (
    <div className='mx-8 my-24 grid grid-cols-3 gap-16 px-0 rounded-xl justify-start items-center relative max-sm:flex max-sm:flex-col max-md:flex max-md:flex-col'>
      <div className='relative flex justify-center items-center'>
        <img loading='lazy' src="./ceo.png" alt="" className='max-md:scale-75' />
        <div className="absolute w-fit rounded-2xl p-4 py-6 hover:shadow-2xl bg-titles text-white bottom-5 left-[10%]">
          <h1 className='text-[20px] font-semibold roboto'>Mwangi Wahome</h1>
          <p className='font-thin'>CEO & Founder</p>
        </div>
      </div>  

      <div className='relative flex justify-center items-center'>
        <img loading='lazy' src="./md.png" alt="" className='max-md:scale-75'/>
        <div className="absolute w-fit rounded-2xl p-4 py-6 hover:shadow-2xl bottom-5 left-[30%] bg-logo text-white">
          <h1 className='text-[20px] font-semibold roboto'>Joe W.</h1>
          <p className='font-thin'>CEO & Founder</p>
        </div>
      </div>

        

      <Card title="Our Team" text="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of human happiness. No one." icon={<Button text="Shore More" color="logo"></Button>}></Card>
    </div>
  )
}

export default Team
