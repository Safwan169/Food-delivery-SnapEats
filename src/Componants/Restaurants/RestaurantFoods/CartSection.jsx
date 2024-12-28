import React, { useContext } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { my_context } from "../../../ContextProvider";

const CartSection = ({ data }) => {
  const { cart, triger, setTriger } = useContext(my_context);

  console.log(cart?.items);

  const handelClear = () => {
    localStorage.removeItem("cartFood");
    setTriger(!triger);
  };
  return (
    <div className="bg-gray-50 w-full sticky top-20 text-gray-800  h-[800px] flex flex-col rounded-[30px] ">
      <h1 className="text-2xl flex items-center justify-between font-bold w-full  text-left  p-5">
        Cart
        {cart && (
          <p
            onClick={handelClear}
            className="text-lg cursor-pointer font-semibold p-2 text-gray-500"
          >
            {" "}
            Clear
          </p>
        )}
      </h1>
      <div
        className={`  items-center ${cart ? " mt-40 " : "justify-center"}  `}
      >
        <div
          className={`flex flex-col ${cart ? "  absolute top-20 w-full p-2" : "items-center"} `}
        >
          {cart ? (
            cart?.items?.map((food) => (
              <div className="flex items-center w-full mt-5 gap-2">
                <img
                  className="w-20 h-16 rounded-2xl"
                  src={food?.image}
                  alt="food"
                />
                <div>
                  <p className="text-xl font-bold">{food?.name}</p>
                  <p className="text-lg text-gray-500">{food?.weight}</p>
                  <p className="text-lg font-semibold ">{food?.price}TK</p>
                </div>
              </div>
            ))
          ) : (
            <>
              {/* Placeholder for an empty bag icon */}
              <div className="w-24 h-24  flex items-center justify-center bg-gray-200 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V6a4 4 0 118 0v1m-6 0h6m2 0a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h12z"
                  />
                </svg>
              </div>
              <p className="mt-6 text-xl font-semibold">
                Your cart is currently empty
              </p>
            </>
          )}
        </div>
        {/* for free delivery */}
        <div className="text-green-500 absolute  bottom-2 border-t py-2 block">
          {data?.isFreeDelivery && (
            <p className="flex items-center gap-5">
              {" "}
              <span className="bg-gray-200 rounded-2xl p-3">
                <TbTruckDelivery className="  text-black" size={20} />
              </span>
              <span>
                <p>Free delivery from 1000 TK</p>
                <p>{data?.deliveryTime}</p>
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSection;
