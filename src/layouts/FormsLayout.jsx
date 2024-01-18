import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../container/footer";

import { Sidebar } from "../Pages";
import AdminNavbar from "../container/AdminNavbar";
export default function FormsLayout() {
  return (
    <>
      {/* <Sidebar /> */}
      <AdminNavbar />
      <Outlet />
      <div
      /* className="loan-footer" */
      >
        <Footer />
      </div>
    </>
  );
}
