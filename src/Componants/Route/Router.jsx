import { createBrowserRouter } from "react-router";
import App from "../../App";
import Root from "../../Layouts/Root";
import Home from "../../Pages/Home";
import RestaurantFoodMain from "../Restaurants/RestaurantFoods/RestaurantFoodMain";
import Search from "../../Pages/Search";
import Register from "../../Pages/Register";
import Login from "../../Pages/Login";

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
        },{
            path: "/search/:text",
            element: <Search/>
        }
        ,{
            path: "/register",
            element: <Register/>
        }
        ,{
            path: "/login",
            element: <Login/>
        }


    ]

  },
])
