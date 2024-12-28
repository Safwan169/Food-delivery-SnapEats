import React, { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { NavLink } from "react-router";
import { my_context } from "../../../ContextProvider";

const FoodsMenu = ({ data }) => {

  const {setMenu,menu}=useContext(my_context)


  const handleMenu=(index)=>{
    setMenu(index)
  }


  return (
    <div className="w-full sticky top-20 px-10 ">
      <NavLink
        className={"flex items-center mb-10 bg-white  px-5 py-3  rounded-2xl  gap-1"}
        to={"/"}
      >
        <IoMdArrowBack size={20} />
        All restaurants
      </NavLink>

      <div className="text-green-600 lg:hidden block">
        {data?.isFreeDelivery && (
          <p className="flex items-center gap-5">
            {" "}
            <span className="bg-gray-100 p-2">
              <TbTruckDelivery className="  text-black" size={20} />
            </span>
            <span>
              <p>Free delivery from 1000 TK</p>
              <p>{data?.deliveryTime}</p>
            </span>
          </p>
        )}
      </div>
      <div>
        <p className="text-xl font-semibold">Menu</p>

        <p className="mt-5 space-y-3 flex-col flex cursor-pointer">
          {data?.foods?.map((text, index) => (
            <a onClick={()=>handleMenu(index)} href={`#${menu}`} className={`font-semibold ${index==menu?'bg-white p-3 rounded-2xl':'p-3'}`}>{text?.category}</a>
          ))}
        </p>
      </div>
    </div>
  );
};

export default FoodsMenu;
