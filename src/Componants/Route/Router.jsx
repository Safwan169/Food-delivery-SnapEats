import { createBrowserRouter } from "react-router";
import App from "../../App";
import Root from "../../Layouts/Root";
import Home from "../../Pages/Home";
import RestaurantFoodMain from "../Restaurants/RestaurantFoods/RestaurantFoodMain";

export const router=createBrowserRouter([{
    path: "/",
    element: <Root/>,
    children: [
        {
            path: "/",
            element:<Home/> ,
           
        },{
            path: "/restaurants/:name",
            element: <RestaurantFoodMain/>
        }


    ]

  },
])
