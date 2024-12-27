import React from 'react'
import { NavLink } from 'react-router'

const Logo = () => {
  return (
    <div>
      <NavLink to={'/'} className={ 'text-xl font-bold sm:text-2xl '} ><img className='w-16 ' src="/snapEats.jpg" alt="" />
      </NavLink>
    </div>
  )
}

export default Logo
