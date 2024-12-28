import React, { useContext } from "react";
import { my_context } from "../../../ContextProvider";

const FoodCard = ({ data, restaurant }) => {
  console.log(data, "sdfadf");

  const {setTriger,triger}=useContext(my_context)

  const handleFoodToCart = () => {
     const cart = {
     restaurant: restaurant,
      items: [
        {
          id: data?.id,
          name: data?.name,
          price: data?.price,
          weight: data?.weight,
          image: data?.image,
          quantity: 1,
        },
      ],
    };

    const newItem=  {
      id: data?.id,
      name: data?.name,
      price: data?.price,
      weight: data?.weight,
      image: data?.image,
      quantity: 1,
    }



    const cartFood = JSON.parse(localStorage.getItem("cartFood"))

    function saveCart(cart) {
      localStorage.setItem("cartFood", JSON.stringify(cart));
    }

    if (cartFood) {
      if (cartFood?.restaurant !== restaurant) {
        console.log("Different restaurant");
        localStorage.removeItem("cartFood");
      return  localStorage.setItem("cartFood", JSON.stringify(cart));

      }
  
      const availableFood = cartFood?.items?.find((item) => item?.id == data?.id);
  
      console.log(availableFood, "availableFood");
      if (availableFood) {
        return 
      } 
      else {

        console.log(cartFood,'for add newcart')
        cartFood?.items?.push(newItem)
        saveCart(cartFood);
      }
    }
    else {
      localStorage.setItem("cartFood", JSON.stringify(cart));
    }

    setTriger(!triger)
   
    }

  
  return (
    <div>
      <div className="w-64 bg-white rounded-3xl  p-4">
        {/* Image */}
        <div className="bg-black rounded-2xl overflow-hidden">
          <img
            src={data?.image}
            //   alt={title}
            className="w-full h-32 object-cover"
          />
        </div>
        {/* Content */}
        <div className="mt-4 ">
          <p className="font-semibold text-xl">{data?.price}Tk</p>
          <p className="text-lg text-gray-600 ">{data?.name}</p>
          <p className="mt-3 text-gray-400">{data?.weight}</p>
        </div>
        {/* Button */}
        <button
          onClick={handleFoodToCart}
          className="mt-4 w-full bg-gray-100 text-black text-lg py-2 rounded-xl   hover:bg-gray-200 transition"
        >
          + Add
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
