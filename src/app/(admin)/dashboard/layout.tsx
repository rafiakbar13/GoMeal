import Sidebar from "@/src/common/components/sidebar/Sidebar";
import React from "react";
import { MENU_ADMIN } from "@/src/common/constants/Menu";
type LayoutDashboardProps = {
  children: React.ReactNode;
};

const LayoutDashboard = ({ children }: LayoutDashboardProps) => {
  return (
    <div className="flex mx-auto max-w-7xl">
      <Sidebar menuItems={MENU_ADMIN} />
      <div className="bg-[#F5F5F5] w-full">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default LayoutDashboard;
