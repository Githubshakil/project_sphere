import React from 'react'
import Container from '../commonLayOut/Container'
import StarShape from '../../icons/StarShape'
import ProvideItems from '../commonLayOut/ProvideItems'

const WeProvide = () => {
return (
 <>
    <div className='mb-[106px]'>
        <img src="images/shape.png" alt="s" className='ml-[230px] mt-[69px] mb-[30px] relative' />
        <Container>
            <div className='w-full mx-aut relative mb-[51px] '>
                <img src="images/shape.png" alt="shape" className=' absolute top-[40px] right-[94px]' />
                <h1 className=' text-center text-[#000] font-["Prompt"] text-[74px] font-extrabold leading-[125%] tracking-[-1.48px]'>What <span className='text-[#5E1EE5]'>we</span> provide?</h1>
                <StarShape className='absolute top-0 left-[100px]' />
                <StarShape className='absolute -top-4 right-[50px] w-[22px] h-[22px]' />
            </div>
            <div className='flex justify-between'>
                <ProvideItems image="images/computer.png" itemName={"Computer & Laptop"} />
                <ProvideItems image="images/mobile.png" itemName={"Mobile & Phone"} />
                <ProvideItems image="images/camera.png" itemName={"Camera"} />
                <ProvideItems image="images/tv.png" itemName={"TV & Smart Box"} />
                <ProvideItems image="images/home.png" itemName={"Home Appliance"} />
                <ProvideItems image="images/accessories.png" itemName={"Accessories"} />
                <ProvideItems image="images/others.png" itemName={"Other Categories"} />
            </div>
        </Container>
    </div>
 </>
)
}

export default WeProvide