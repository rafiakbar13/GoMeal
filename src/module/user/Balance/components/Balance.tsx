"use client";
import React from "react";
import { Card, CardContent } from "@/common/components/ui/card";
import Image from "next/image";
import Income from "@images/icon/Income.svg";
import Profit from "@images/icon/Profit.svg";
import Topup from "./Topup";
import { getData } from "@/common/lib/getData";
import { AuthOptions, getServerSession } from "next-auth";
import { authOptions } from "@/common/lib/authOptions";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { convertCurrency } from "@/common/lib/convertCurrency";
type Props = {};

const Balance = (props: Props) => {
  const { data: session, status } = useSession();
  if (status === "loading") return <p>Loading...</p>;

  const userId = session?.user?.id;

  const getBalance = async () => {
    const response = await getData(`/user/${userId}`);
    return response;
  };

  const { data: user } = useQuery({
    queryKey: ["balance"],
    queryFn: getBalance,
  });

  return (
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
              {convertCurrency(user?.balance ?? 0)}
            </h1>
          </div>
          <div className="flex gap-x-6 items-center">
            <Topup />
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

export default Balance;
