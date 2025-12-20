import React from "react";
import { NavLink } from "react-router-dom";
import additem from "../assets/additem.png";
import order_icon from "../assets/order_icon.png";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-white border-r">
      <NavLink
        to="/Add"
        className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100"
      >
        <img src={additem} alt="Add" className="w-6 h-6" />
        <p className="text-sm font-medium">Add Items</p>
      </NavLink>

       <NavLink
        to="/List"
        className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100"
      >
        <img src={order_icon} alt="Add" className="w-6 h-6" />
        <p className="text-sm font-medium">List Items</p>
      </NavLink>

       <NavLink
        to="/Orders"
        className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100"
      >
        <img src={order_icon} alt="Add" className="w-6 h-6" />
        <p className="text-sm font-medium">Orders</p>
      </NavLink>


    </div>
  );
};

export default Sidebar;
