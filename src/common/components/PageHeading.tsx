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
    <div className="flex justify-end py-5">
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
