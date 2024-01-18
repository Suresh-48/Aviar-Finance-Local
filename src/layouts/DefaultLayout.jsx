import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../container/footer";
import { HeaderNavbar } from "../Pages";

export default function DefaultLayout() {
  return (
    <div style={{ marginTop: "45px" }}>
      <HeaderNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}
