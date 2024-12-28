import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router";
import FoodCard from "../Componants/Restaurants/RestaurantFoods/FoodCard";
import { IoIosStar } from "react-icons/io";

const Search = () => {
  const text = useParams().text;

  const [result, setSearchResult] = useState([]);

  // console.log(text,'this is search')

  useEffect(() => {
    const find = async () => {
      const res = await axios.get(`https://food-delivery-snap-eats-szgc.vercel.app/search?value=${text}`);

      console.log(res?.data, "this is from backendsdfdsffas");

      setSearchResult(res.data);
    };

    find();
  }, [text]);

  const navigate = useNavigate();
  const handleRestaurant = (data) => {
    // console.log("You clicked on restaurant: ", name),
      navigate(`/restaurants/${data?.name}`);

    const available = localStorage.getItem("restaurantFood");

    console.log(available, "is available");

    if (available) {
      localStorage.removeItem("restaurantFood");
    localStorage.setItem("restaurantFood", JSON.stringify(data));
  }
  else{
    localStorage.setItem("restaurantFood", JSON.stringify(data));

  }


}

  if(result.length < 1) {
    return <p className="text-2xl font-semibold w-fit h-96 flex items-center gap-3 flex-wrap text-gray-600 mx-auto">No results found for {text}
     <NavLink className={' border-b  text-black hover:border-yellow-500 duration-300 hover:text-yellow-500'} to={'/'}>Return To Home</NavLink>
    </p>
  }

  return (
    <div  className="mx-auto cursor-pointer w-fit mt-11">
      {result.map((data) => (
        <div onClick={()=>handleRestaurant(data)}>
          <div className="flex gap-5 items-center">
            <img
              className=" w-20 h-20 object-cover rounded-3xl"
              src={data?.image}
              alt=""
            />
            <div>
              <p className=" flex text-2xl font-bold gap-4 items-center ">
                <span className="">{data?.name}</span>
                <span className=" flex items-center gap-1">
                  <IoIosStar size={20} />
                  {data?.rating}
                </span>
              </p>
              <p className="text-gray-400 text-lg">{data?.deliveryTime}</p>
              <p className="mt-3 text-[16px]">
                {data?.isFreeDelivery ? (
                  <span className="bg-green-100 rounded-3xl  px-4 py-2  text-green-700">
                    Free delivery
                  </span>
                ) : (
                  data?.isFreeMeal && (
                    <span className="bg-green-100 rounded-3xl  px-4 py-2 text-green-700 ">
                      Meal as a gift{" "}
                    </span>
                  )
                )}
              </p>{" "}
            </div>
          </div>
        <div className="flex">
        {data?.foods?.map((text, index) => (
            <div className="" id={index}>
              {/* <p className="text-2xl font-bold mt-5">{text?.category}</p> */}

              <p className="flex flex-wrap mt-5 gap-5">
                {text?.items?.map((d) => (
                  <FoodCard data={d} />
                ))}
              </p>
            </div>
          ))}
        </div>
        </div>
      ))}
    </div>
  );
};

export default Search;
