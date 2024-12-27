import React, { useContext } from "react";
import RestaurantCardStucture from "./RestaurantCardStucture";
import { my_context } from "../../../ContextProvider";

const RestaurantCardMain = () => {
  const restaurants = [
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
    },
    {
      id: 2,
      name: "Burger Barn",
      image: "https://example.com/images/burger-barn.jpg",
      rating: 4.5,
      deliveryTime: "25-35 mins",
      type: "Burger Joint",
      address: "456 Burger Street, Food City",
      foods: [
        {
          category: "Burgers",
          items: [
            {
              id: 301,
              name: "Classic Beef Burger",
              image: "https://example.com/images/beef-burger.jpg",
              price: 6.99,
              weight: "300g",
              description: "Juicy beef patty with lettuce, tomato, and cheese.",
            },
            {
              id: 302,
              name: "Chicken Burger",
              image: "https://example.com/images/chicken-burger.jpg",
              price: 7.49,
              weight: "320g",
              description:
                "Grilled chicken breast with creamy mayo and fresh veggies.",
            },
          ],
        },
        {
          category: "Sides",
          items: [
            {
              id: 401,
              name: "French Fries",
              image: "https://example.com/images/french-fries.jpg",
              price: 2.49,
              weight: "200g",
              description: "Crispy golden fries served with ketchup.",
            },
            {
              id: 402,
              name: "Onion Rings",
              image: "https://example.com/images/onion-rings.jpg",
              price: 2.99,
              weight: "250g",
              description: "Crunchy onion rings with a side of ranch dip.",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Sushi World",
      image: "https://example.com/images/sushi-world.jpg",
      rating: 4.7,
      deliveryTime: "40-50 mins",
      type: "Japanese Restaurant",
      address: "789 Sushi Street, Food City",
      isFreeMeal:true,
      foods: [
        {
          category: "Sushi Rolls",
          items: [
            {
              id: 501,
              name: "California Roll",
              image: "https://example.com/images/california-roll.jpg",
              price: 10.99,
              weight: "250g",
              description:
                "Fresh crab, avocado, and cucumber wrapped in seaweed and rice.",
            },
            {
              id: 502,
              name: "Spicy Tuna Roll",
              image: "https://example.com/images/spicy-tuna-roll.jpg",
              price: 12.49,
              weight: "260g",
              description: "Spicy tuna with a hint of wasabi and sesame seeds.",
            },
          ],
        },
        {
          category: "Beverages",
          items: [
            {
              id: 601,
              name: "Green Tea",
              image: "https://example.com/images/green-tea.jpg",
              price: 1.49,
              volume: "250ml",
              description: "Soothing and refreshing Japanese green tea.",
            },
            {
              id: 602,
              name: "Sake",
              image: "https://example.com/images/sake.jpg",
              price: 5.99,
              volume: "150ml",
              description:
                "Traditional Japanese rice wine served warm or chilled.",
            },
          ],
        },
      ],
    },
  ];

  const {restaurantBtn}=useContext(my_context)
  console.log(restaurantBtn,'this is from the card for card section ')

  return  <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Restaurants</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <RestaurantCardStucture key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
};

export default RestaurantCardMain;
