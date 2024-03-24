"use client";
import React, { useState } from "react";
import { Input } from "@/common/components/ui/input";
import { Button } from "@/common/components/ui/button";
import { Card, CardContent, CardFooter } from "@/common/components/ui/card";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Food } from "@prisma/client";
import { convertCurrency } from "@/common/lib/convertCurrency";
import { useDebounceValue } from "usehooks-ts";
import axios from "axios";
import { useSession } from "next-auth/react";
interface Props {
  data: Food[];
}

const Favorite = ({ data }: Props) => {
  // const [value, setValue] = useState("");
  // const debouncedValue = useDebounceValue(value, 500);

  // const { data: session } = useSession();
  // const user = session?.user?.id;
  // const [foods, setFoods] = useState<Food[]>([]);

  // const handleSearch = async (event: any) => {
  //   if (event.key === "Enter") {
  //     try {
  //       const response = await axios.get(
  //         `/api/favorite/${user}?name=${debouncedValue}`
  //       );
  //       console.log(response.data);
  //       setFoods(response.data);
  //     } catch (error) {
  //       console.error("Error fetching favorite foods:", error);
  //     }
  //   }
  // };

  return (
    <section className="mx-6 my-8 relative h-screen">
      <article className="flex flex-col gap-y-5">
        <h1 className="text-zinc-800 text-3xl font-bold font-['Poppins']">
          Favorite Menu
        </h1>
        <div className="relative flex w-1/2 ">
          <Input
            type="search"
            placeholder="What do you want to eat today..."
            className="focus-visible:ring-1 focus-visible:ring-primary pl-10 text-sm placeholder:text-zinc-400 border-0"
            // onChange={(e) => setValue(e.target.value)}
            // onKeyUp={handleSearch}
          />
          <FiSearch
            className="text-primary absolute left-3 top-1/2 transform -translate-y-1/2"
            size={20}
          />
        </div>
      </article>
      <article className="mt-10 grid grid-cols-3 gap-x-3">
        {data.map((food) => (
          <Card className="w-60 border-none py-2 flex flex-col" key={food.id}>
            <div className="self-end px-4">
              <AiFillHeart size={24} className="text-red-600" />
            </div>
            <CardContent className="flex flex-col justify-center">
              <Image
                src={food.image ?? ""}
                alt="Bakery"
                width={200}
                height={200}
              />
            </CardContent>
            <CardFooter className=" text-base font-normal font-['Poppins'] px-4 flex justify-between items-center border-t-[1.5px]">
              <div className="">
                <p className="pt-4 font-semibold">{food.name}</p>
                <span className="text-zinc-800 text-xl font-bold font-['Poppins']">
                  {convertCurrency(food.price)}
                </span>
              </div>
              <Button
                size={"sm"}
                className="bg-primary text-white mt-2 rounded-lg"
              >
                <AiOutlinePlus size={20} />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </article>
      {/* Pagination */}
      <article className="absolute bottom-0 w-full">
        <div className="flex justify-between items-center">
          <div className="text-sm font-['Poppins'] text-zinc-500">
            <p className="">
              Showing <span className="text-black font-semibold">1-5</span> from{" "}
              <span className="text-black font-semibold">100</span> data
            </p>
          </div>
          <div className="flex items-center gap-x-3">
            <Button className="bg-transparent text-zinc-400 hover:bg-transparent">
              <IoIosArrowBack size={18} />
            </Button>
            {[1, 2, 3].map((_, i) => (
              <Button
                key={i}
                className="bg-orange-100 text-orange-400 hover:bg-orange-100 rounded-xl"
              >
                {i + 1}
              </Button>
            ))}
            <Button className="bg-transparent text-zinc-400 hover:bg-transparent">
              <IoIosArrowForward size={18} />
            </Button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Favorite;
