import React from 'react'
import HartShape from '../../icons/HartShape'

const ArrivalBox = ({loveIcon}) => {
  return (
    <>
        <div>
            <div className=' relative w-[410px] h-[404px] border-1 border-[#fff] rounded-[15px] drop-shadow-lg backdrop-blur-sm pt-[99px] pb-[38px] pl-[52px] pr-[56px] '>
                <div className='w-[302px] h-[267px] bg-[#d9d9d9]'></div>
               { loveIcon &&
                <div className='w-[49px] h-[49px] bg-[#000] rounded-full absolute top-[28px] right-[30px] flex items-center justify-center'>
                    <HartShape />
                </div>
                ||
                <div className='w-[49px] h-[49px] bg-[#000] rounded-full absolute top-[28px] right-[86px] flex items-center justify-center'>
                    <HartShape />
                </div>


               }
            </div>
        </div>
    </>
  )
}

export default ArrivalBox