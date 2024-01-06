import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Input } from "./ui/input";
import { FiSearch } from "react-icons/fi";
type PageHeadingProps = {
  href: string;
  linkTitle: string;
};

const PageHeading = ({ href, linkTitle }: PageHeadingProps) => {
  return (
    <div className="flex justify-between py-5">
      <div className="relative flex w-1/2 items-center ">
        <Input
          type="search"
          placeholder="Search..."
          className="focus-visible:ring-1 focus-visible:ring-primary pl-10 text-xs border-0"
        />
        <FiSearch
          className="text-primary absolute left-3 top-1/2 transform -translate-y-1/2"
          size={20}
        />
      </div>
      <Link
        href={href}
        className="inline-flex bg-primary text-sm items-center px-4 rounded-md py-2 text-white font-semibold hover:bg-primary/75 transition duration-300 ease-in-out"
      >
        <Plus />
        <span>{linkTitle}</span>
      </Link>
    </div>
  );
};

export default PageHeading;
