import React from 'react'
import Container from '../commonLayOut/Container'
import StarShape from '../../icons/StarShape'
import Search from '../../icons/Search'

const GatwaySearch = () => {
  return (
    <div>
        <Container>
            <div className='w-[1237px] bg-[#212736]  rounded-[15px] pt-[62px] pl-[73px] pr-[51px] pb-[77px] flex gap-[49px]  items-center'>
                <div>
                    <h4 className='w-[410px] text-[#fff] font-["Prompt] text-[46px] font-bold leading-[120%] tracking-[-0.92px]'>Gateway to a world of innovation with</h4>
                    <div className='mt-[17px] flex justify-between items-center'>
                        <img src="images/logo-white.png" alt="" />
                        <StarShape/>
                    </div>
                </div>
                <div className='w-[591px] h-[143px] bg-[#eff0f1] rounded-[15px] flex flex-col justify-center gap-[25px] px-[23px] pt-[34px] pb-[11px] ml-[49px]'>
                    <div className=' flex items-center gap-[21px] ml-3'>
                        <Search />
                        <input type="text" placeholder='Search for electronic' className='text-[#01081a] font-["Montserrat"] text-[21px] font-light'/>
                    </div>
                        <button className='py-[13px] px-[243px] bg-[#ace238] rounded-[15px] text-[#000] font-["Montserrat"] text-[17px] font-medium cursor-pointer'>Search</button>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default GatwaySearch