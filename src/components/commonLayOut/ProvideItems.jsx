import React from 'react'

const ProvideItems = ({image, itemName}) => {
  return (
   <>
    <div className='text-center flex flex-col items-center gap-6 cursor-pointer'>
        <div className="w-[85px] h-[85px] rounded-full flex items-center justify-center drop-shadow-lg bg-white backdrop-blur-lg border border-white">
            <img src={image} alt="provide item" className='w-[40px] h-[40px]' />
        </div>
        <div className=' text-[#2c2c2c] font-["Montserrat"] text-[18px] font-medium leading-[130%]  max-w-[118px] '>
            {itemName}
        </div>
    </div>
   </>
  )
}

export default ProvideItems