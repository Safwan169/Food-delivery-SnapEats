import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'

const CartSection = ({data}) => {
  return (
    <div className="w-full sticky top-20   h-[800px] flex flex-col rounded-[30px]  items-center justify-center bg-gray-50 text-gray-800">
    <h1 className="text-2xl font-bold absolute top-5 left-5 mb-6">Cart</h1>
    <div className="flex flex-col items-center">
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
      <p className="mt-6 text-xl font-semibold">Your cart is currently empty</p>
      <div className="text-green-500 absolute bottom-2 border-t py-2 block">
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
  )
}

export default CartSection
