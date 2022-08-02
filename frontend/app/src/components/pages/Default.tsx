import React from "react";
import Header from "../organisms/Header";
import { Outlet } from "react-router-dom";

const Default: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Default;
