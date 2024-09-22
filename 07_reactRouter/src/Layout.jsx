/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
