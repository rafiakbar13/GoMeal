"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarItemProps = {
  name: string;
  icon: JSX.Element;
  path: string;
};

const SidebarItem = ({ name, icon, path }: SidebarItemProps) => {
  const pathname = usePathname();
  return (
    <div>
      <Link
        href={path}
        className={`${
          pathname === path ? `bg-primary rounded-lg text-white` : ``
        } flex items-center my-5 gap-x-4 py-2 px-4 whitespace-nowrap`}
      >
        <i className={`w-8 ${pathname === path ? "fill-white" : ""}`}>{icon}</i>
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default SidebarItem;
