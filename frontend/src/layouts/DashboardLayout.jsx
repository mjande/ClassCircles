import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNav from "../templates/dash/DashboardNav";

export default function DashboardLayout() {
  return (
    <section className="container my-3 p-0">
      <div className="row justify-content-between">
        <div className="col-3">
          <DashboardNav />
        </div>
        <Outlet />
      </div>
    </section>
  );
}
