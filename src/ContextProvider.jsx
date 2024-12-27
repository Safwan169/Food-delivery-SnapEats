import React, { createContext, useState } from 'react'

 export const my_context=createContext()
const ContextProvider = ({children}) => {

    const [restaurantBtn,setRestaurantBtn] = useState('All')

    const data={
        setRestaurantBtn,
        restaurantBtn,
    }
  return (
    <my_context.Provider value={data}>
        {children}
      
    </my_context.Provider >
  )
}

export default ContextProvider
