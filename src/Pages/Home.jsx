import React from "react";
import RestaurantsBtn from "../Componants/Restaurants/RestaurantsBtn/RestaurantsBtn";
import RestaurantCardMain from "../Componants/Restaurants/RestaurantCard/RestaurantCardMain";

const Home = () => {
  return (
    <div >
      <div className="pt-40  max-w-[1400px] mx-auto">
        <RestaurantsBtn />
      <RestaurantCardMain />
      </div>
    </div>
  );
};

export default Home;
