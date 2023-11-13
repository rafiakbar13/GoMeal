import React from "react";
import { FiSearch } from "react-icons/fi";
import { Input } from "@/src/common/components/ui/input";

const OrderHistory = () => {
  return (
    <section className="mx-6 my-8">
      <article className="flex flex-col gap-y-5">
        <h1 className="text-zinc-800 text-3xl font-bold font-['Poppins']">
          Order History
        </h1>
        <div className="relative flex w-1/2 ">
          <Input
            type="search"
            placeholder="What do you want to eat today..."
            className="focus-visible:ring-1 focus-visible:ring-primary pl-10 text-sm placeholder:text-zinc-400 border-0"
          />
          <FiSearch
            className="text-primary absolute left-3 top-1/2 transform -translate-y-1/2"
            size={20}
          />
        </div>
      </article>
    </section>
  );
};

export default OrderHistory;
