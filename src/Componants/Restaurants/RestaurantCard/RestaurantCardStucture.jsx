import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaCarAlt } from "react-icons/fa";
import {
  MdOutlineDeliveryDining,
  MdOutlineStarPurple500,
} from "react-icons/md";
import { useNavigate } from "react-router";

const RestaurantCardStucture = ({ restaurant }) => {
    const navigate= useNavigate()
const handleRestaurant=(name) => {
    console.log("You clicked on restaurant: ", name),
    navigate(`/restaurants/${name}`)
  
}
  return (
    <div onClick={()=>handleRestaurant(restaurant.name)} className="   ">
      <div className=" h-fit   ">
        <img className="rounded-3xl bg-cover h-[150px] w-full " src={restaurant.image} alt="" />
      </div>
      <div className="px-3 mt-2 ">
        <div className="flex  justify-between">
          <p className="font-semibold">{restaurant?.name}</p>
          <p className="flex items-center gap-1">
            <MdOutlineStarPurple500 size={20} />
            {restaurant?.rating}
          </p>
        </div>
        <p className="flex text-gray-500 items-center gap-1">
          <FaCarAlt size={15} />
          <span>{restaurant?.deliveryTime}</span>
        </p>
      <p className="mt-1">
      {restaurant.isFreeDelivery?<span className="bg-green-100 rounded-3xl text-xs px-2 py-1 text-green-600">Free delivery</span>:restaurant.isFreeMeal&&<span className="bg-green-100 rounded-3xl text-xs px-2 py-1 text-green-600 ">Meal as a gift </span>}
      </p>
      </div>
    </div>
  );
};

export default RestaurantCardStucture;
