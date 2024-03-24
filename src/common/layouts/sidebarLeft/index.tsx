"use client";
import React from "react";
import { MENU } from "@/common/constants/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@react-email/components";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/common/components/ui/tooltip";

const SidebarLeft = () => {
  const pathname = usePathname();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const sidebarWidth = expanded ? "220px" : "60px";

  return (
    <aside
      className={`w-[${sidebarWidth}] h-full py-10 px-6 transition-all duration-300`}
    >
      <article className="flex flex-col">
        <h1 className="text-3xl font-bold text-center">
          GoMeal<span className="text-primary">.</span>
        </h1>
        <div className="pt-10 mx-auto">
          {MENU.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`${
                pathname === item.path
                  ? `bg-primary rounded-lg text-white w-fit`
                  : ``
              } flex items-center my-5 gap-x-4  py-2 px-4 whitespace-nowrap`}
            >
              {expanded ? (
                <>
                  <span
                    className={`w-8 ${
                      pathname === item.path ? "fill-white" : ""
                    }`}
                  >
                    {item.icon}
                  </span>
                  <p>{item.name}</p>
                </>
              ) : (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="w-8">
                        <TooltipContent>{item.name}</TooltipContent>
                        {item.icon}
                      </span>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              )}
            </Link>
          ))}
        </div>
      </article>
      <div className="text-center border-t-[1px]  ">
        <Button
          onClick={handleExpand}
          className="my-4 text-primary cursor-pointer text-lg w-full"
        >
          {expanded ? <ChevronLeft /> : <ChevronRight />}
        </Button>
      </div>
    </aside>
  );
};

export default SidebarLeft;
