import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../templates/nav/Nav";
import Footer from "../templates/footer/Footer";

export default function HomeLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
