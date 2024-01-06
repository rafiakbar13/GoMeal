import Heading from "@/src/common/components/Heading";
import { Input } from "@/src/common/components/ui/input";
import React from "react";
import { FiSearch } from "react-icons/fi";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <section className="px-10 py-10">
      <header className="flex justify-between">
        <Heading
          title="Dashboard"
          className="text-zinc-800 text-3xl font-bold"
        />
        <div className="relative flex w-1/2 ">
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
      </header>
    </section>
  );
};

export default Dashboard;
