import React from "react";
import { FiSearch } from "react-icons/fi";
import { Input } from "@/common/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/common/components/ui/card";
import Image from "next/image";
import { Button } from "@/common/components/ui/button";
import { AiOutlinePlus } from "react-icons/ai";
import { Badge } from "@/common/components/ui/badge";
import Star from "@images/icon/Star.svg";
import Pepproni from "@images/images/Pizza/pepproni-pizza.png";
import { FoodOrder } from "@prisma/client";
import { formatDate } from "@/common/lib/formatDate";
import { convertCurrency } from "@/common/lib/convertCurrency";
import { statusClassMap } from "@/common/lib/statusClassMap";
interface Order {
  id: string;
  orderStatus: string;
  orderNumber: string;
  total: number;
  createdAt: Date;
  fooditems: FoodOrder[];
}

interface OrderProps {
  data: Order[];
}

const OrderFood = ({ data }: OrderProps) => {
  const getStatusClass = (status: string) => {
    return statusClassMap[status as keyof typeof statusClassMap] || "";
  };

  console.log(data);
  return (
    <section className="mx-5 my-4">
      <article className="flex justify-between items-center">
        <h1 className="text-zinc-800 text-3xl font-bold font-['Poppins']">
          Food Order
        </h1>
        <div className="relative flex w-1/2 ">
          <Input
            type="search"
            placeholder="Search Order"
            className="focus-visible:ring-1 focus-visible:ring-primary pl-10 text-xs border-0"
          />
          <FiSearch
            className="text-primary absolute left-3 top-1/2 transform -translate-y-1/2"
            size={20}
          />
        </div>
      </article>
      {/* Order */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-3 justify-around mt-4 ">
        {data.map((order) => (
          <Card className="border-none py-2 relative h-[420px]" key={order.id}>
            <CardHeader className="text-zinc-800 text-2xl font-bold font-['Poppins'] text-center flex flex-col gap-y-3 divide-y-[1px]">
              <div className="flex flex-col gap-y-2">
                <p>{order.orderNumber}</p>
                <p className="text-sm text-zinc-400">
                  {formatDate(order.createdAt)}
                </p>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col justify-center ">
              <h1 className="text-lg font-normal font-['Poppins']">
                Order Menu
              </h1>
              {order.fooditems?.map((food) => (
                <div className=" divide-y space-y-5 mt-2" key={food.id}>
                  <div className="flex items-center justify-between gap-x-3">
                    <div className="flex gap-x-2">
                      <Image
                        src={food.image ?? ""}
                        width={56}
                        height={56}
                        alt="Pepproni Pizza"
                        className="w-14 h-14"
                      />
                      <div>
                        <p className="text-zinc-800 font-semibold font-['Poppins']">
                          {food.name}
                        </p>
                        <p className="text-zinc-400 text-sm font-normal font-['Poppins']">
                          {food.quantity} qty
                        </p>
                      </div>
                    </div>
                    <p>
                      <span className="text-zinc-800 text-base font-semibold font-['Poppins']">
                        {convertCurrency(food.price)}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
            <div className="absolute bottom-0 w-full my-2">
              <div className="pt-4 flex flex-col gap-y-3 border-t-[1px] my-4 px-4 ">
                <div className="flex justify-between items-center">
                  <p className="text-zinc-800 text-lg font-medium font-['Poppins']">
                    Total
                  </p>
                  <p>
                    <span className="text-zinc-800 text-2xl font-medium font-['Poppins']">
                      {convertCurrency(order.total) ?? null}
                    </span>
                  </p>
                </div>
              </div>
              <CardFooter className="text-zinc-400 text-base font-normal font-['Poppins'] px-4">
                <span
                  className={`w-full ${getStatusClass(
                    order.orderStatus
                  )} uppercase text-center `}
                >
                  {order.orderStatus}
                </span>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default OrderFood;
