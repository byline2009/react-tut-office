import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const WrapperLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <div className="content-page">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default WrapperLayout;
