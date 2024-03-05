import React from "react";
import { Card, CardContent } from "@/common/components/ui/card";
import Image from "next/image";
import Income from "@images/icon/Income.svg";
import Profit from "@images/icon/Profit.svg";
import Topup from "./Topup";
type Props = {};

const Balance = (props: Props) => {
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
              $12.000
            </h1>
          </div>
          <div className="flex gap-x-6 items-center">
            <Topup />
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
  );
};

export default Balance;
