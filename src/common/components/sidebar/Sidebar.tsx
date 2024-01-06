import React from "react";
import { MenuProps } from "../../types/Menu";
import SidebarItem from "./SidebarItem";
import Header from "../Heading";

type SidebarProps = {
  menuItems?: MenuProps[];
  className?: string;
};

const Sidebar = ({ menuItems, className }: SidebarProps) => {
  return (
    <aside className={`w-56 h-screen py-10 px-6 ${className}`}>
      <Header title="GoMeal" className="text-3xl font-bold text-center">
        <span className="text-primary">.</span>
      </Header>
      {menuItems?.map((item, index) => {
        return <SidebarItem key={index} {...item} />;
      })}
    </aside>
  );
};

export default Sidebar;
