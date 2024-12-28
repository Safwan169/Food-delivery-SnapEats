import React, { useEffect, useState } from 'react'
import FoodsMenu from './FoodsMenu'
import RestaurantFoods from './RestaurantFoods'
import CartSection from './CartSection';

const RestaurantFoodSection = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const foodData = localStorage.getItem("restaurantFood");

    const food = JSON.parse(foodData);

    setData(food);
  }, []);



  return (
    <div className=' grid   px-20 mx-auto gap-0 grid-cols-5'>
      <div className=" ">
      <FoodsMenu data={data}/>

      </div>
        <div className=' w-full mb-5 col-span-3 '>
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
