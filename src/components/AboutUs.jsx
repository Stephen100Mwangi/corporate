/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card'
import Badge from './Badge'

import { FaPeopleGroup } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import Button from './Button';

const AboutUs = () => {
  return (
    <div id='about' className='items-center justify-between w-full gap-8 px-8 grid grid-cols-4 my-10 max-sm:flex max-sm:flex-col max-sm:gap-y-12'>
        <Card title="WHAT WE DO" text="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give , or avoids pleasure itself, because it." icon={<Button text="Show More" color="logo"></Button>}></Card>
        <Badge icon={<FaPeopleGroup className='size-32' />} title="BUSINESS CONSULTANCY" text="But I must explain to you how all this mistaken idea of denouncing pleasure and"></Badge>
        <Badge icon={<GiTeacher className='size-32' />} title="GROW BUSINESS" text="But I must explain to you how all this mistaken idea of denouncing pleasure and"></Badge>
        <Badge icon={<RiCustomerService2Fill className='size-32' />} title="CUSTOMER SUPPORT" text="But I must explain to you how all this mistaken idea of denouncing pleasure and"></Badge>
    </div>
  )
}

export default AboutUs
