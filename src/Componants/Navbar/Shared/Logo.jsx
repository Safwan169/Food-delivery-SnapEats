import React from 'react'
import { NavLink } from 'react-router'

const Logo = () => {
  return (
    <div>
      <NavLink to={'/'} className={ 'text-xl font-bold sm:text-2xl '} ><img className='w-16 ' src="https://i.ibb.co.com/4SSSR6G/snap-Eats-removebg-preview.png" alt="" />
      </NavLink>
    </div>
  )
}

export default Logo
