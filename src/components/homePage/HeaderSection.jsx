import React from 'react'
import Container from '../commonLayOut/Container'
import Button from '../commonLayOut/Button'
import ArrowRight from '../../icons/ArrowRight'

const HeaderSection = () => {
  return (
    <>
    <Container>
        <div className='flex justify-between items-center py-[50px]   '>
            {/* logo */}
            <div className='flex items-center cursor-pointer justify-cente pb-1 '>
                <img src="images/logo.png" alt="logo" />
            </div>

            {/* navbar */}
            <div className='flex items-center justify-center '>
                <ul className='flex gap-[25px] font-["Montserrat"]  text-[13px] font-semibold text-[#8E8E8E] uppercase '>
                   <li className='p-4 leading-[130%] cursor-pointer'>Home</li>
                   <li  className='p-4 leading-[130%] cursor-pointer'>Pricing</li>
                   <li  className='p-4 leading-[130%] cursor-pointer'>Events</li>
                   <li  className='p-4 leading-[130%] cursor-pointer'>Company</li>
                </ul>
            </div>

            {/* Login  */}
            <div>
                <div className='flex items-center gap-6'>
                    <button className='font-["Montserrat"]  text-[13px] font-semibold text-[#8E8E8E] p-4 leading-[130%] cursor-pointer space-y-10'>LOGIN</button>
                    <Button textbtn={"Sign Up Now"}/>
                </div>
            </div>
        </div>
    </Container>
       
    
    </>
  )
}

export default HeaderSection