import React, { useContext, useState } from "react";
import { NavLink } from "react-router";
import Logo from "./Shared/Logo";
import SearchBar from "./Shared/SearchBar";
import Address from "./Shared/Address";
import Notification from "./Shared/Notification";
import Language from "./Shared/Language";
import Cart from "./Shared/Cart";
import UserProfile from "./Shared/UserProfile";
import { my_context } from "../../ContextProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase.config";
import Swal from "sweetalert2";

const Navbar = () => {

  const {user,cart}=useContext(my_context)

  // console.log(cart.items)

  const price=cart?.items?.reduce((acc, current)=>acc+current?.price,0)
  console.log(price)

  console.log(user)

  const handleLogout = () => {
    setBtn(false)
    signOut(auth)
        .then(() => {
            Swal.fire({
                text: "You have successfully Sign Out",
                icon: "alert",
                showConfirmButton: false,
                timer: 2000
            });

        })
}

const [btn,setBtn]=useState(false)

  return (
    <nav className="px-7 bg-[#f5f4f2] z-50 fixed w-full">
      <div className="flex justify-between items-center border-b  pb-2">
        <div className="flex gap-10 w-1/2 items-center">
          <Logo />
          <SearchBar />
          {/* <Address /> */}
        </div>
        <div className="  flex gap-5 items-center">
          {user && (
            <span>
              <Notification />
            </span>
          )}
          {/* <Language /> */}
          <Cart price={price} />
          {user?.email&& (
            <span onClick={()=>setBtn(!btn)} className="group">
             <img className="w-10  rounded-2xl" src={user?.photoURL} alt="dfasd" />
              <p onClick={handleLogout} className={`${btn?'block': "hidden"} cursor-pointer absolute mt-2 right-5 group-hover:bg-gray-500  text-white rounded-xl p-2 font-semibold text-sm`}>Sign Out</p>
            </span>
          )}
          {!user?.email && <NavLink to={'/login'} className="px-5 py-3 cursor-pointer font-semibold bg-gray-200 rounded-2xl">Log in</NavLink>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
