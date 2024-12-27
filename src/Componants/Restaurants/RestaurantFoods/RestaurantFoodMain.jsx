import React from 'react'
import { useParams } from 'react-router'
import RestaurantFoodSection from './RestaurantFoodSection'

const RestaurantFoodMain = () => {

    const restaurantName = useParams().name
    console.log(restaurantName,'this is is for params')
  return (
    <div className='bg-[#f5f4f2] mx-w-[1100px]'>
      
      <RestaurantFoodSection name={restaurantName} />
    </div>
  )
}

export default RestaurantFoodMain
