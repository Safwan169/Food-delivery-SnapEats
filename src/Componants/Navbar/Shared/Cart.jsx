import React from 'react'
import { MdOutlineShoppingCart } from 'react-icons/md'

const Cart = ({price}) => {
  return (
    <div className='flex items-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 duration-300 gap-1 rounded-2xl'>
      <MdOutlineShoppingCart />
      <span>{price&&price ||0} BDT</span>

    </div>
  )
}

export default Cart
