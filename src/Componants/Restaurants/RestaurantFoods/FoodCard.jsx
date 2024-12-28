import React from 'react'

const FoodCard = ({data}) => {

    console.log(data,'sdfadf')
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
                        <p className="mt-3 text-gray-400">
                          {data?.weight} 
                        </p>
                      </div>
                      {/* Button */}
                      <button className="mt-4 w-full bg-gray-100 text-black text-lg py-2 rounded-xl   hover:bg-gray-200 transition">
                        + Add
                      </button>
                    </div>
                  </div>
  )
}

export default FoodCard
