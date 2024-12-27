import React, { useContext } from "react";
import RestaurantCardStucture from "./RestaurantCardStucture";
import { my_context } from "../../../ContextProvider";

const RestaurantCardMain = () => {
  const restaurants = [
    {
      "id": 1,
      "name": "Pizza Paradise",
      "image": "https://i.ibb.co.com/BGVCnBS/piza.jpg",
      "rating": 4.8,
      "deliveryTime": "30-40 mins",
      "type": "Pizza Shop",
      "address": "123 Pizza Lane, Food City",
      "minimumAmountForFreeDelivery": 500,
      "isFreeMeal": true,
      "foods": [
        {
          "category": "Pizza",
          "items": [
            {
              "id": 101,
              "name": "Margherita Pizza",
              "image": "https://i.ibb.co.com/BGVCnBS/piza.jpghttps://i.ibb.co.com/wgXLcC0/PIZZA-MARGHERITA.jpg",
              "price": 899,  // in BDT
              "weight": "350g",
              "description": "Classic Margherita pizza with fresh basil and mozzarella cheese."
            },
            {
              "id": 102,
              "name": "Pepperoni Pizza",
              "image": "https://i.ibb.co.com/RS0gWgJ/opt-aboutcom-coeus-resources-content-migration-simply-recipes-uploads-2019-09-easy-pepperoni-pizza-l.jpg",
              "price": 999,  // in BDT
              "weight": "400g",
              "description": "Loaded with spicy pepperoni and melted cheese."
            }
          ]
        },
        {
          "category": "Soft Drinks",
          "items": [
            {
              "id": 201,
              "name": "Coke",
              "image": "https://i.ibb.co.com/svfQYkk/cczs-best-coke-ever-desktop.webp",
              "price": 199,  // in BDT
              "volume": "330ml",
              "description": "Refreshing Coca-Cola to pair with your pizza."
            },
            {
              "id": 202,
              "name": "Sprite",
              "image": "https://i.ibb.co.com/gw4SPzj/does-sprite-have-caffeine-in-it-1024x626.jpg",
              "price": 199,  // in BDT
              "volume": "330ml",
              "description": "Crisp and refreshing lemon-lime drink."
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "name": "Burger Barn",
      "image": "https://i.ibb.co.com/y5HZ2BN/images.jpg",
      "rating": 4.5,
      "deliveryTime": "25-35 mins",
      "type": "Burger Joint",
      "address": "456 Burger Street, Food City",
      "minimumAmountForFreeDelivery": 500,
      "isFreeDelivery": false,
      "foods": [
        {
          "category": "Burgers",
          "items": [
            {
              "id": 301,
              "name": "Classic Beef Burger",
              "image": "https://i.ibb.co.com/wBPtqZC/images.jpg",
              "price": 699,  // in BDT
              "weight": "300g",
              "description": "Juicy beef patty with lettuce, tomato, and cheese."
            },
            {
              "id": 302,
              "name": "Chicken Burger",
              "image": "https://i.ibb.co.com/MMG5P3y/download.jpg",
              "price": 749,  // in BDT
              "weight": "320g",
              "description": "Grilled chicken breast with creamy mayo and fresh veggies."
            }
          ]
        },
        {
          "category": "Sides",
          "items": [
            {
              "id": 401,
              "name": "French Fries",
              "image": "https://i.ibb.co.com/zNHyQFn/Baked-French-Fries-Recipe-1200.jpg",
              "price": 249,  // in BDT
              "weight": "200g",
              "description": "Crispy golden fries served with ketchup."
            },
            {
              "id": 402,
              "name": "Onion Rings",
              "image": "https://i.ibb.co.com/TWkqYTg/Homemade-Burger-King-Style-Onion-Rings-A-Crispy-Treat-qrfgel155k85knb8cuoznc5bhwib9ef8d7j1lhf0d8.webp",
              "price": 299,  // in BDT
              "weight": "250g",
              "description": "Crunchy onion rings with a side of ranch dip."
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "name": "Sushi World",
      "image": "https://i.ibb.co.com/x1CwVjs/images.jpg",
      "rating": 4.7,
      "deliveryTime": "40-50 mins",
      "type": "Japanese Restaurant",
      "address": "789 Sushi Street, Food City",
      "minimumAmountForFreeDelivery": 500,
      "isFreeDelivery": false,
      "foods": [
        {
          "category": "Sushi Rolls",
          "items": [
            {
              "id": 501,
              "name": "California Roll",
              "image": "https://i.ibb.co.com/27zcxZM/download.jpg",
              "price": 1099,  // in BDT
              "weight": "250g",
              "description": "Fresh crab, avocado, and cucumber wrapped in seaweed and rice."
            },
            {
              "id": 502,
              "name": "Spicy Tuna Roll",
              "image": "https://i.ibb.co.com/qn5CpBy/hero-img-recipe-spicy-tuna-3db6e125056f2bde01321a3da5d290da.jpg",
              "price": 1249,  // in BDT
              "weight": "260g",
              "description": "Spicy tuna with a hint of wasabi and sesame seeds."
            }
          ]
        },
        {
          "category": "Beverages",
          "items": [
            {
              "id": 601,
              "name": "Green Tea",
              "image": "https://i.ibb.co.com/vqTNY2T/download.jpg",
              "price": 149,  // in BDT
              "volume": "250ml",
              "description": "Soothing and refreshing Japanese green tea."
            },
            {
              "id": 602,
              "name": "Sake",
              "image": "https://i.ibb.co.com/zNcRx8x/download.jpg",
              "price": 599,  // in BDT
              "volume": "150ml",
              "description": "Traditional Japanese rice wine served warm or chilled."
            }
          ]
        }
      ]
    },

      {
        "id": 4,
        "name": "Taco Fiesta",
        "image": "https://i.ibb.co.com/zNcRx8x/download.jpghttps://i.ibb.co.com/ZVv0fFV/download.jpg",
        "rating": 4.6,
        "deliveryTime": "20-30 mins",
        "type": "Mexican Restaurant",
        "address": "123 Taco Boulevard, Food City",
        "minimumAmountForFreeDelivery": 400,
        "isFreeDelivery": true,
        "foods": [
          {
            "category": "Tacos",
            "items": [
              {
                "id": 701,
                "name": "Chicken Tacos",
                "image": "https://i.ibb.co.com/42fXb4v/Shredded-Chicken-Tacos-Little-Chef-Within.jpg",
                "price": 349, // in BDT
                "weight": "250g",
                "description": "Soft tortillas filled with seasoned chicken, lettuce, and salsa."
              },
              {
                "id": 702,
                "name": "Beef Tacos",
                "image": "https://i.ibb.co.com/7tq0SN7/download.jpg",
                "price": 399, // in BDT
                "weight": "270g",
                "description": "Juicy beef with spicy seasoning, fresh veggies, and cheese."
              }
            ]
          },
          {
            "category": "Sides",
            "items": [
              {
                "id": 703,
                "name": "Nachos",
                "image": "https://i.ibb.co.com/4TrF46b/download.jpg",
                "price": 299, // in BDT
                "weight": "200g",
                "description": "Crunchy tortilla chips topped with melted cheese and jalapeños."
              },
              {
                "id": 704,
                "name": "Guacamole",
                "image": "https://i.ibb.co.com/19c79vX/download.jpg",
                "price": 199, // in BDT
                "weight": "100g",
                "description": "Freshly made avocado dip with a hint of lime."
              }
            ]
          }
        ]
      },
      {
        "id": 5,
        "name": "Pasta Palace",
        "image": "https://i.ibb.co.com/RvZXMJZ/258381-leones.webp",
        "rating": 4.9,
        "deliveryTime": "30-40 mins",
        "type": "Italian Restaurant",
        "address": "456 Pasta Lane, Food City",
        "minimumAmountForFreeDelivery": 700,
        "isFreeDelivery": true,
        "foods": [
          {
            "category": "Pasta",
            "items": [
              {
                "id": 801,
                "name": "Spaghetti Carbonara",
                "image": "https://i.ibb.co.com/GTvFY53/download.jpg",
                "price": 999, // in BDT
                "weight": "300g",
                "description": "Creamy pasta with crispy bacon and parmesan."
              },
              {
                "id": 802,
                "name": "Penne Arrabbiata",
                "image": "https://i.ibb.co.com/SvGJvDg/download.jpg",
                "price": 899, // in BDT
                "weight": "350g",
                "description": "Spicy tomato-based pasta with garlic and chili flakes."
              }
            ]
          },
          {
            "category": "Desserts",
            "items": [
              {
                "id": 803,
                "name": "Tiramisu",
                "image": "https://i.ibb.co.com/v4wPqCH/download.jpg",
                "price": 499, // in BDT
                "weight": "150g",
                "description": "Classic Italian coffee-flavored dessert with mascarpone cheese."
              },
              {
                "id": 804,
                "name": "Panna Cotta",
                "image": "https://i.ibb.co.com/JkjrgLF/download.jpg",
                "price": 449, // in BDT
                "weight": "200g",
                "description": "Silky smooth cream dessert with a berry topping."
              }
            ]
          }
        ]
      },
      {
        "id": 6,
        "name": "Kebab Kingdom",
        "image": "https://i.ibb.co.com/rQLcrM9/download.jpg",
        "rating": 4.4,
        "deliveryTime": "35-45 mins",
        "type": "Middle Eastern Restaurant",
        "address": "789 Kebab Avenue, Food City",
        "minimumAmountForFreeDelivery": 600,
        "isFreeDelivery": true,
        "foods": [
          {
            "category": "Kebabs",
            "items": [
              {
                "id": 901,
                "name": "Chicken Seekh Kebab",
                "image": "https://i.ibb.co.com/svTpmGM/download.jpg",
                "price": 549, // in BDT
                "weight": "250g",
                "description": "Juicy chicken kebabs grilled to perfection with spices."
              },
              {
                "id": 902,
                "name": "Lamb Kebab",
                "image": "https://i.ibb.co.com/g7fkTTC/download.jpg",
                "price": 649, // in BDT
                "weight": "300g",
                "description": "Tender lamb kebabs served with mint chutney."
              }
            ]
          },
          {
            "category": "Breads",
            "items": [
              {
                "id": 903,
                "name": "Pita Bread",
                "image": "https://i.ibb.co.com/vqXpZbQ/download.jpg",
                "price": 149, // in BDT
                "weight": "150g",
                "description": "Soft and fluffy pita bread perfect for dipping."
              },
              {
                "id": 904,
                "name": "Garlic Naan",
                "image": "https://i.ibb.co.com/0F0Z5NP/download.jpg",
                "price": 199, // in BDT
                "weight": "200g",
                "description": "Buttery naan bread with a hint of garlic."
              }
            ]
          }
        ]
      }
    
    
  ];
  

  const {restaurantBtn}=useContext(my_context)
  console.log(restaurantBtn,'this is from the card for card section')

  return  <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Restaurants</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {restaurants.map((restaurant) => (
          <RestaurantCardStucture key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
};

export default RestaurantCardMain;
