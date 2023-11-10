import React from 'react'
import { Card, CardContent, CardFooter } from "@/src/common/components/ui/card";
import Image from "next/image";
import Bakery from "@/public/icon/Baked.svg";
import Burger from "@/public/icon/Burger.svg";
import Pizza from "@/public/icon/Fast.svg";
import Beverage from "@/public/icon/Coffee.svg";
import Chicken from "@/public/icon/Chicken.svg";
import FishBurger from "@/public/images/Burger/Fish-burger.png";
import Star from "@/public/icon/Star.svg";
type Props = {}

const Category = (props: Props) => {
    return (
        <article className="mt-5">
            <div className="flex justify-between items-center">
                <h2 className="text-zinc-800 text-2xl font-bold font-['Poppins']">
                    Category
                </h2>
                <p className="text-sm text-primary font-['Poppins']">View All</p>
            </div>
            <div className="flex gap-x-3 justify-around mt-2">
                <Card className="w-28 border-none flex flex-col items-center justify-center py-2">
                    <CardContent className="">
                        <Image src={Bakery} alt="Bakery" width={50} />
                    </CardContent>
                    <CardFooter className="text-center text-zinc-400 text-base font-normal font-['Poppins']">
                        Bakery
                    </CardFooter>
                </Card>
                <Card className="w-28 border-none flex flex-col items-center justify-center py-3">
                    <CardContent>
                        <Image src={Burger} alt="Bakery" width={50} />
                    </CardContent>
                    <CardFooter className="text-center text-zinc-400 text-base font-normal font-['Poppins']">
                        Burger
                    </CardFooter>
                </Card>
                <Card className="w-28 border-none flex flex-col items-center justify-center py-3">
                    <CardContent>
                        <Image src={Pizza} alt="Bakery" width={50} />
                    </CardContent>
                    <CardFooter className="text-center text-zinc-400 text-base font-normal font-['Poppins']">
                        Pizza
                    </CardFooter>
                </Card>
                <Card className="w-28 border-none flex flex-col items-center justify-center py-3">
                    <CardContent>
                        <Image src={Beverage} alt="Bakery" width={50} />
                    </CardContent>
                    <CardFooter className="text-center text-zinc-400 text-base font-normal font-['Poppins']">
                        Beverage
                    </CardFooter>
                </Card>
                <Card className="w-28 border-none flex flex-col items-center justify-center py-3">
                    <CardContent>
                        <Image src={Chicken} alt="Bakery" width={50} />
                    </CardContent>
                    <CardFooter className="text-center text-zinc-400 text-base font-normal font-['Poppins']">
                        Chicken
                    </CardFooter>
                </Card>
            </div>
        </article>
    )
}

export default Category