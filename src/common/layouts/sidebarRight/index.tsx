"use client";
import React from "react";
import { IoMdSettings, IoMdNotificationsOutline } from "react-icons/io";
import { BiMap } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

import Image from "next/image";
import { Button } from "../../components/ui/button";
import Coupon from "@images/icon/Coupon.svg";
import { usePathname, useRouter } from "next/navigation";
import Cart from "@/module/user/cart/component/Cart";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";

import { UserAvatar } from "../../components/UserAvatar";
import Balance from "@/module/user/Balance/components/Balance";
import Link from "next/link";
import { toast } from "sonner";
const SidebarRight = () => {
  const cart = useSelector((state: any) => state.cart);
  const pathname = usePathname();
  const router = useRouter();
  if (
    pathname === "/favorite" ||
    pathname === "/history" ||
    pathname === "/bills"
  )
    return null;

  const Checkout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (cart.length === 0) {
      toast.error("Cart is empty");
    } else {
      router.push("/checkout");
    }
    console.log(cart);
  };

  const { data: session, status } = useSession();
  if (status === "loading") return null;
  if (status === "unauthenticated") {
    router.push("/sign-in");
  }
  return (
    <aside className="w-[300px] py-10 h-full">
      <article className="px-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-4">
            <IoMdNotificationsOutline />
            <IoMdSettings />
          </div>
          {session && <UserAvatar user={session.user?.image} />}
        </div>
        <Balance />
        {/* Address */}
        <Address />
        {/* Order Menu */}
        <article className="mt-8">
          <h1 className="text-lg font-normal font-['Poppins']">Order Menu</h1>
          <Cart />
          <div className="pt-4">
            {pathname === "/home/delivery" ? (
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
                  className="bg-primary text-white w-full mt-4 py-4"
                  onClick={Checkout}
                >
                  <Link href="">Checkout</Link>
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

function Address({}) {
  return (
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, reiciendis?
      </p>
      <div className="mt-4 flex gap-x-5">
        <Button variant={"outline"}>Add Details</Button>
        <Button variant={"outline"}>Add note</Button>
      </div>
    </article>
  );
}
