import React from 'react'
import { useParams } from 'react-router'

const RestaurantFoodMain = () => {

    const restaurantName = useParams().name
    console.log(restaurantName,'this is is for params')
  return (
    <div>
      
    </div>
  )
}

export default RestaurantFoodMain
