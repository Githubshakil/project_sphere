import React from 'react'
import Cart from '../../icons/Cart'

const CartBtn = () => {
  return (
    <>
        <button className='flex items-center gap-2.5 border border-[#000] py-4 px-[37px] rounded-[52px] cursor-pointer mt-[21px]'>
           <Cart /> 
           Add to Cart
        </button>
    </>
  )
}

export default CartBtn