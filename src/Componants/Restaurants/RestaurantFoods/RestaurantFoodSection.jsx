import React, { useEffect, useState } from 'react'
import FoodsMenu from './FoodsMenu'
import RestaurantFoods from './RestaurantFoods'
import CartSection from './CartSection';

const RestaurantFoodSection = ({name}) => {
  const [data, setData] = useState();

  useEffect(() => {
    const foodData = localStorage.getItem("restaurantFood");

    const food = JSON.parse(foodData);

    setData(food);
  }, []);



  return (
    <div className=' grid   px-20 mx-auto gap-0 grid-cols-5'>
      <div className="border border-red-500 ">
      <FoodsMenu data={data}/>

      </div>
        <div className='border w-full col-span-3 border-red-600'>
          {/* this is for food content */}
        <RestaurantFoods data={data}/>
        </div>

        <div className='p-5 '>
          {/* this is for cart section  */}
          <CartSection data={data} />
        </div>
    </div>
  )
}

export default RestaurantFoodSection
