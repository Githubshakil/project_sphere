import React from 'react'
import Container from '../commonLayOut/Container'
import StarShape from '../../icons/StarShape'

const BestSellers = () => {
  return (
    <>
    <Container>
        <div className='flex mb-[65px]'>
            <h3 className='text-left text-[#000] font-["Prompt"] text-[47px] font-bold leading-[125%] tracking-[-0.94px]'>Flash sale for <span className="text-[#5E1EE5]">best</span> sellers</h3>
            <div>
                <img src="images/shape.png" alt="shape" className='ml-[315px]  ' />
                <StarShape className='ml-[532px] mt-[28px]' />
            </div>
        </div>

        <div>

        </div>
    </Container>
    </>
  )
}

export default BestSellers