"use client";
import React from "react";
import Pepproni from "@/public/images/Pizza/pepproni-pizza.png";
import Image from "next/image";
import { useSelector } from "react-redux";
type Props = {};

const Cart = (props: Props) => {
  const cartItems = useSelector((state: any) => state.cart);
  console.log(cartItems, "cartItems");

  const subtotal = cartItems.reduce((acc: number, item: any) => {
    return acc + item.price * item.qty;
  }, 0);

  return (
    <div>
      <div className="divide-y space-y-5">
        <div className="flex flex-col ">
          {cartItems.length > 0 ? (
            <div>
              {cartItems.map((item: any) => (
                <div className="flex justify-around">
                  <Image
                    src={item.image ?? ""}
                    alt="Pepproni Pizza"
                    className="w-16 h-16"
                    width={249}
                    height={249}
                  />
                  <div>
                    <p className="text-zinc-800 font-semibold font-['Poppins']">
                      {item.name}
                    </p>
                    <p className="text-zinc-400 text-sm font-normal font-['Poppins']">
                      qty : {item.qty}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p>
                      <span className="text-yellow-500 text-lg font-semibold font-['Poppins']">
                        Rp.
                      </span>
                      <span className="text-zinc-800 text-lg font-semibold font-['Poppins']">
                        {item.total}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>

        <div className="pt-4 flex flex-col gap-y-3">
          <div className="flex justify-between items-center">
            <p className="text-zinc-400 text-sm font-medium font-['Poppins']">
              Service
            </p>
            <p>
              <span className="text-zinc-800 text-lg font-medium font-['Poppins']">
                +
              </span>
              <span className="text-yellow-500 text-lg font-medium font-['Poppins']">
                $
              </span>
              <span className="text-zinc-800 text-lg font-medium font-['Poppins']">
                1.00
              </span>
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-zinc-800 text-lg font-medium font-['Poppins']">
              SubTotal
            </p>
            <p>
              <span className="text-yellow-500 text-2xl font-medium font-['Poppins']">
                $
              </span>
              <span className="text-zinc-800 text-2xl font-medium font-['Poppins']">
                {subtotal.toFixed(2)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
