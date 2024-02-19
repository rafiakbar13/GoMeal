"use client";
import React from "react";
import { IoMdSettings, IoMdNotificationsOutline } from "react-icons/io";
import { Avatar, AvatarImage } from "../../components/ui/avatar";
import { Card, CardContent } from "../../components/ui/card";
import { BiMap } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import Income from "@/public/icon/Income.svg";
import Profit from "@/public/icon/Profit.svg";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import Pepproni from "@/public/images/Pizza/pepproni-pizza.png";
import Coupon from "@/public/icon/Coupon.svg";
import { usePathname } from "next/navigation";
import Cart from "@/src/module/user/cart/component/Cart";
import { useSelector } from "react-redux";
const SidebarRight = () => {
  const cart = useSelector((state: any) => state.cart);
  const pathname = usePathname();

  if (
    pathname === "/favorite" ||
    pathname === "/history" ||
    pathname === "/bills"
  )
    return null;

  const Checkout = (e: any) => {
    e.preventDefault();
    // const cart = JSON.parse(localStorage.getItem("cart") || "") || [];
    console.log(cart);
  };

  return (
    <aside className="w-[300px] py-10 h-full">
      <article className="px-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-4">
            <IoMdNotificationsOutline />
            <IoMdSettings />
          </div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
        </div>
        <article>
          <h1 className="text-xl mb-4 font-['Poppins'] ">Your Balance</h1>
          <Card className=" relative overflow-hidden border-none bg-primary">
            <div className="w-60 h-60 left-[-112px] top-[-59px] absolute opacity-50 bg-rose-500 rounded-full z-0" />
            <div className="w-60 h-60 left-[-8px] top-[71px] absolute opacity-50 bg-lime-400 rounded-full z-0" />
            <CardContent className="flex p-5 gap-x-5 relative z-10">
              <div className=" p-4 bg-white rounded-2xl flex-col justify-start items-start inline-flex gap-y-2">
                <p className="text-zinc-800 text-sm font-normal font-['Poppins']">
                  Balance
                </p>
                <h1 className="text-zinc-800 text-xl font-bold font-['Poppins']">
                  $12.000
                </h1>
              </div>
              <div className="flex gap-x-6 items-center">
                <div className="text-center flex flex-col gap-y-3 items-center justify-center">
                  <div className="bg-white p-3 rounded-xl w-12">
                    <Image src={Income} alt="Profit" />
                  </div>
                  <p className="text-sm whitespace-nowrap text-white font-['Poppins']">
                    Top Up
                  </p>
                </div>
                <div className="text-center flex flex-col gap-y-3 items-center justify-center">
                  <div className="bg-white p-3 rounded-xl w-12">
                    <Image src={Profit} alt="Profit" />
                  </div>
                  <p className="text-sm whitespace-nowrap text-white font-['Poppins']">
                    Transfer
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </article>
        {/* Address */}
        <article className="mt-8">
          <h1 className="text-zinc-400 text-lg font-normal font-['Poppins']">
            Address
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex gap-x-2 items-center">
              <BiMap className="text-primary" size={24} />
              <p className="text-zinc-800 text-lg font-bold font-['Poppins']">
                Elm Street, 23
              </p>
            </div>
            <Button className="bg-white text-primary border border-primary px-4 hover:bg-white">
              Change
            </Button>
          </div>
          <p className="text-zinc-400 text-sm font-normal font-['Poppins'] mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            reiciendis?
          </p>
          <div className="mt-4 flex gap-x-5">
            <Button variant={"outline"}>Add Details</Button>
            <Button variant={"outline"}>Add note</Button>
          </div>
        </article>
        {/* Order Menu */}
        <article className="mt-8">
          <h1 className="text-lg font-normal font-['Poppins']">Order Menu</h1>
          <Cart />
          <div className="pt-4">
            {pathname === "/delivery" ? (
              <Button className="w-full bg-orange-50 border border-orange-300 text-orange-400 hover:bg-orange-50 hover:text-orange-400 text-base font-normal font-['Poppins']">
                Delivering To You
              </Button>
            ) : (
              <div>
                <Button className="backdrop-blur-md bg-zinc-100 text-black border-[1.5px] border-primary w-full hover:bg-zinc-100 py-4">
                  <Image
                    src={Coupon}
                    alt="Coupon"
                    className="w-8 h-8 rounded mr-3 bg-primary"
                  />
                  Have a Coupon Code
                  <BiChevronRight className="ml-3" size={20} />
                </Button>
                <Button
                  onClick={Checkout}
                  className="bg-primary text-white w-full mt-4 py-4"
                >
                  Checkout
                </Button>
              </div>
            )}
          </div>
        </article>
      </article>
    </aside>
  );
};

export default SidebarRight;
