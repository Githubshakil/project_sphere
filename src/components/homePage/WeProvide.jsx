import React from 'react'
import Container from '../commonLayOut/Container'
import StarShape from '../../icons/StarShape'

const WeProvide = () => {
  return (
   <>
    <div>
                <img src="images/shape.png" alt="s" className='ml-[230px] mt-[69px] mb-[30px] relative'  />
    <Container>
         <div className='w-full mx-aut relative mb-[51px] '>
                <img src="images/shape.png" alt="shape" className=' absolute top-[40px] right-[94px]     '/>
            <h1 className=' text-center text-[#000] font-["Prompt"] text-[74px] font-extrabold leading-[125%] tracking-[-1.48px]'>What <span className='text-[#5E1EE5]'>we</span> provide?</h1>
            <StarShape className='absolute top-0 left-[100px]'/>
            <StarShape className='absolute -top-4 right-[0px] w-[22px] h-[22px]'/>
           
        
        </div>
    </Container>
    </div>
   </>
  )
}

export default WeProvide