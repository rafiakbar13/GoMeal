import React from 'react'
import { Card, CardContent, CardFooter } from "@/src/common/components/ui/card";
import Image from "next/image";
import { Button } from "@/src/common/components/ui/button";
import { AiOutlinePlus } from "react-icons/ai";
import { Badge } from "@/src/common/components/ui/badge";
import Star from "@/public/icon/Star.svg";
import FishBurger from "@/public/images/Burger/Fish-burger.png";
type Props = {}

const PopularDishes = (props: Props) => {
    return (
        <article className="mt-5">
            <div className="flex justify-between items-center">
                <h2 className="text-zinc-800 text-2xl font-bold font-['Poppins']">
                    Popular Dishes
                </h2>
                <p className="text-sm text-primary font-['Poppins']">View All</p>
            </div>
            <div className="flex gap-x-3 justify-around mt-2">
                <Card className="relative w-52 border-none py-2">
                    <Badge className="absolute top-2 left-2 bg-primary text-white">
                        20%
                    </Badge>
                    <CardContent className="flex justify-center">
                        <Image src={FishBurger} alt="Bakery" />
                    </CardContent>
                    <CardFooter className="text-zinc-400 text-base font-normal font-['Poppins'] px-4 flex flex-col items-start">
                        <span>
                            {Array(5)
                                .fill(0)
                                .map((_, i) => (
                                    <Image
                                        key={i}
                                        src={Star}
                                        alt="Star"
                                        className="inline-block"
                                        width={15}
                                    />
                                ))}
                        </span>
                        <p>Fish Burger</p>
                        <div className="flex justify-between items-center gap-x-4 w-full">
                            <h1>
                                <span className="text-yellow-500 text-xl font-bold font-['Poppins']">$</span>
                                <span className="text-zinc-800 text-xl font-bold font-['Poppins']">5.59</span>
                            </h1>
                            <Button size='sm' className='bg-primary text-white mt-2'>
                                <AiOutlinePlus size={20} />
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
                <Card className="relative w-52 border-none py-2">
                    <Badge className="absolute top-2 left-2 bg-primary text-white">
                        20%
                    </Badge>
                    <CardContent className="flex justify-center">
                        <Image src={FishBurger} alt="Bakery" />
                    </CardContent>
                    <CardFooter className="text-zinc-400 text-base font-normal font-['Poppins'] px-4 flex flex-col items-start">
                        <span>
                            {Array(5)
                                .fill(0)
                                .map((_, i) => (
                                    <Image
                                        key={i}
                                        src={Star}
                                        alt="Star"
                                        className="inline-block"
                                        width={15}
                                    />
                                ))}
                        </span>
                        <p>Fish Burger</p>
                        <div className="flex justify-between items-center gap-x-4 w-full">
                            <h1>
                                <span className="text-yellow-500 text-xl font-bold font-['Poppins']">$</span>
                                <span className="text-zinc-800 text-xl font-bold font-['Poppins']">5.59</span>
                            </h1>
                            <Button size='sm' className='bg-primary text-white mt-2'>
                                <AiOutlinePlus size={20} />
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
                <Card className="relative w-52 border-none py-2">
                    <Badge className="absolute top-2 left-2 bg-primary text-white">
                        20%
                    </Badge>
                    <CardContent className="flex justify-center">
                        <Image src={FishBurger} alt="Bakery" />
                    </CardContent>
                    <CardFooter className="text-zinc-400 text-base font-normal font-['Poppins'] px-4 flex flex-col items-start">
                        <span>
                            {Array(5)
                                .fill(0)
                                .map((_, i) => (
                                    <Image
                                        key={i}
                                        src={Star}
                                        alt="Star"
                                        className="inline-block"
                                        width={15}
                                    />
                                ))}
                        </span>
                        <p>Fish Burger</p>
                        <div className="flex justify-between items-center gap-x-4 w-full">
                            <h1>
                                <span className="text-yellow-500 text-xl font-bold font-['Poppins']">$</span>
                                <span className="text-zinc-800 text-xl font-bold font-['Poppins']">5.59</span>
                            </h1>
                            <Button size='sm' className='bg-primary text-white mt-2'>
                                <AiOutlinePlus size={20} />
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>

        </article>
    )
}

export default PopularDishes