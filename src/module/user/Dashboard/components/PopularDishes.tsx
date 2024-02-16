"use client";
import React from "react";
import { Card, CardContent, CardFooter } from "@/src/common/components/ui/card";
import Image from "next/image";
import { Button } from "@/src/common/components/ui/button";
import { AiOutlinePlus } from "react-icons/ai";
import { Badge } from "@/src/common/components/ui/badge";
import Star from "@/public/icon/Star.svg";
import FishBurger from "@/public/images/Burger/Fish-burger.png";
import { getData } from "@/src/common/lib/getData";
import { useQuery } from "@tanstack/react-query";
import { Food } from "@prisma/client";
import { useDispatch } from "react-redux";
import { addToCart } from "@/src/redux/slices/cartSlice";
import { toast } from "sonner";
import { convertCurrency } from "@/src/common/lib/convertCurrency";
type Props = {};

const PopularDishes = (props: Props) => {
  const dispatch = useDispatch();

  const getDataLimited = async (menu: any) => {
    const response = await getData(menu);
    return response.slice(0, 6);
  };

  const { data: foods, isLoading } = useQuery<Food[]>({
    queryKey: ["food"],
    queryFn: () => getDataLimited("menu"),
  });

  const handleAddToCart = (food: Food) => {
    dispatch(addToCart(food));
    toast.success("Added to cart");
  };

  return (
    <article className="mt-5">
      <div className="flex justify-between items-center">
        <h2 className="text-zinc-800 text-2xl font-bold font-['Poppins']">
          Popular Dishes
        </h2>
        <p className="text-sm text-primary font-['Poppins']">View All</p>
      </div>
      <div className="grid grid-cols-3 gap-x-3 gap-y-2  mt-2">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          foods?.map((food, i) => (
            <Card key={i} className="relative w-52 border-none py-2">
              <CardContent className="flex justify-center">
                <Image
                  src={food.image ?? ""}
                  alt={food.name}
                  width={249}
                  height={249}
                />
              </CardContent>
              <CardFooter className="text-base font-normal font-['Poppins'] px-4 flex flex-col items-start">
                <p>{food.name}</p>
                <div className="flex justify-between items-center gap-x-4 w-full">
                  <span className="text-zinc-800 text-xl font-bold font-['Poppins']">
                    {convertCurrency(food.price)}
                  </span>
                  <Button
                    size="sm"
                    className="bg-primary text-white mt-2"
                    onClick={() => handleAddToCart(food)}
                  >
                    <AiOutlinePlus size={20} />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </article>
  );
};

export default PopularDishes;
