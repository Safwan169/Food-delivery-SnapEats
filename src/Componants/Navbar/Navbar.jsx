import React, { useState } from "react";
import { NavLink } from "react-router";
import Logo from "./Shared/Logo";
import SearchBar from "./Shared/SearchBar";
import Address from "./Shared/Address";
import Notification from "./Shared/Notification";
import Language from "./Shared/Language";
import Cart from "./Shared/Cart";
import UserProfile from "./Shared/UserProfile";

const Navbar = () => {
  const user = false;

  return (
    <nav className="px-7 bg-[$f5f4f2] fixed w-full">
      <div className="flex justify-between items-center border-b  pb-2">
        <div className="flex gap-10 w-1/2 items-center">
          <Logo />
          <SearchBar />
          <Address />
        </div>
        <div className="  flex gap-5 items-center">
          {user && (
            <span>
              <Notification />
            </span>
          )}
          <Language />
          {user && (
            <span>
              <Cart />
              <UserProfile />
            </span>
          )}
          {!user && <span className="px-5 py-3 font-semibold bg-gray-200 rounded-2xl">Log in</span>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;