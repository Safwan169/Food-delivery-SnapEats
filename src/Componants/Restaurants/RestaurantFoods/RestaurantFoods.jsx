import { IoLogoModelS, IoMdStar } from "react-icons/io";
import FoodCard from "./FoodCard";
import { useContext } from "react";
import { my_context } from "../../../ContextProvider";

const RestaurantFoods = ({ data }) => {
  console.log(data?.image);
  console.log(data);

  const {setMenu}=useContext(my_context)


  const handleMenu=(index) => {
    setMenu(index)



  }


  //   console.log(data.food,"this is a category");
  return (
    <>
      <div className="relative rounded-[40px] w-full  overflow-hidden shadow-lg">
        <img id="0"
          src={data?.image} // Replace with your image URL
          alt="Burger"
          className="w-full h-[400px] bg-cover object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <div className="absolute bottom-16 left-16 text-white ">
          <h2 className="text-xl flex items-center gap-1 font-bold">
            {data?.name}
          </h2>
          <div className="flex items-center text-black font-semibold mt-2">
            <div className="flex items-center  bg-[#e7e6e6] bg-opacity-85  px-2 py-2 rounded-lg text-sm mr-2">
              <span className="material-icons mr-1">
                <IoLogoModelS size={20} />
              </span>
              <span>25–35 min</span>
            </div>
            <div className="flex items-center justify-center bg-[#e7e6e6]  bg-opacity-85 px-2 py-2 rounded-lg text-sm mr-2">
              <span className="material-icons mr-1">
                <IoMdStar size={20} />
              </span>
              <p className="items-center">
                <span>4.8</span>
                <span className="ml-1">(200+)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>
          {data?.foods?.map((text,index) => (
            <div id={index}>
              <p className="text-2xl font-bold mt-5">{text?.category}</p>

              <p className="flex flex-wrap mt-5 gap-5">
                {text?.items?.map((d) => (
                  <FoodCard data={d} restaurant={data?.name} />
                ))}
              </p>
            </div>
          ))}
        </p>
      </div>
    </>
  );
};

export default RestaurantFoods;
