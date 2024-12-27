import React from "react";
import Navbar from "../Componants/Navbar/Navbar";
import Footer from "../Componants/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20  mx-auto min-h-96 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
