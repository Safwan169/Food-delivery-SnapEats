import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { IoMdArrowBack } from 'react-icons/io'
import { NavLink } from 'react-router'

const FoodsMenu = () => {

    const data=
        {
            id: 1,
            name: "Pizza Paradise",
            image: "https://example.com/images/pizza-paradise.jpg",
            rating: 4.8,
            deliveryTime: "30-40 mins",
            type: "Pizza Shop",
            address: "123 Pizza Lane, Food City",
            isFreeDelivery:true,
            foods: [
              {
                category: "Pizza",
                items: [
                  {
                    id: 101,
                    name: "Margherita Pizza",
                    image: "https://example.com/images/margherita-pizza.jpg",
                    price: 8.99,
                    weight: "350g",
                    description:
                      "Classic Margherita pizza with fresh basil and mozzarella cheese.",
                  },
                  {
                    id: 102,
                    name: "Pepperoni Pizza",
                    image: "https://example.com/images/pepperoni-pizza.jpg",
                    price: 9.99,
                    weight: "400g",
                    description: "Loaded with spicy pepperoni and melted cheese.",
                  },
                ],
              },
              {
                category: "Soft Drinks",
                items: [
                  {
                    id: 201,
                    name: "Coke",
                    image: "https://example.com/images/coke.jpg",
                    price: 1.99,
                    volume: "330ml",
                    description: "Refreshing Coca-Cola to pair with your pizza.",
                  },
                  {
                    id: 202,
                    name: "Sprite",
                    image: "https://example.com/images/sprite.jpg",
                    price: 1.99,
                    volume: "330ml",
                    description: "Crisp and refreshing lemon-lime drink.",
                  },
                ],
              },
            ],
          }
    

  return (
    <div>
      <NavLink className={'flex items-center bg-white  px-5 py-3  rounded-2xl  gap-1'} to={'/'}><IoMdArrowBack size={20} />
    
      All restaurants</NavLink>

      <div>
        <p className='text-xl font-semibold'>Menu</p>
        <p className='mt-5 space-y-3'>{data.foods?.map((text,index)=>(<p>

            

        </p>))}</p>
      </div>
    </div>
  )
}

export default FoodsMenu
