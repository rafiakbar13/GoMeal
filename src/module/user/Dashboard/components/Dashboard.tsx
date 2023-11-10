import React from "react";
import { Input } from "@/src/common/components/ui/input";
import { FiSearch } from "react-icons/fi";
import Banner from "./Banner";
import Category from "./Category";
import PopularDishes from "./PopularDishes";
import RecentOrder from "./RecentOrder";


const Dashboard = () => {
    return (
        <section className="mx-5 my-4">
            <article className="flex justify-between items-center">
                <h1 className="text-zinc-800 text-3xl font-bold font-['Poppins']">
                    Hallo, Rafi
                </h1>
                <div className="relative flex w-1/2 ">
                    <Input
                        type="search"
                        placeholder="What do you want to eat today..."
                        className="focus-visible:ring-1 focus-visible:ring-primary pl-10 text-xs"
                    />
                    <FiSearch
                        className="text-primary absolute left-3 top-1/2 transform -translate-y-1/2"
                        size={20}
                    />
                </div>
            </article>
            {/* Banner */}
            <Banner />
            {/* Category */}
            <Category />
            {/* Popular dishes */}
            <PopularDishes />
            {/* Recent Order */}
            <RecentOrder />
        </section>
    );
};

export default Dashboard;
