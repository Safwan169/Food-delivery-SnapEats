import React from "react";
import Navbar from "../Componants/Navbar/Navbar";
import Footer from "../Componants/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
