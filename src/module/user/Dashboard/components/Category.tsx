"use client";
import React from "react";
import { Card, CardContent, CardFooter } from "@/common/components/ui/card";
import Image from "next/image";
import type { Category } from "@/common/types/category";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/common/lib/getData";
const Category = () => {
  const { data: categories, isLoading } = useQuery<Category[]>({
    queryKey: ["category"],
    queryFn: () => getData("categories"),
  });

  return (
    <article className="mt-5">
      <div className="flex justify-between items-center">
        <h2 className="text-zinc-800 text-2xl font-bold font-['Poppins']">
          Category
        </h2>
        <p className="text-sm text-primary font-['Poppins']">View All</p>
      </div>
      <div className="flex gap-x-3 justify-around mt-2">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          categories?.map((category) => (
            <Card
              key={category.id}
              className="w-28 border-none flex flex-col items-center justify-center py-2"
            >
              <CardContent className="">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={50}
                  height={50}
                />
              </CardContent>
              <CardFooter className="text-center text-zinc-400 text-base font-normal font-['Poppins']">
                {category.name}
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </article>
  );
};

export default Category;
