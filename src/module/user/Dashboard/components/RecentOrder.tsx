import React from 'react'
import { Card, CardContent, CardFooter } from "@/src/common/components/ui/card";
import Image from "next/image";
import Pepproni from "@/public/images/Pizza/pepproni-pizza.png";
type Props = {}

const RecentOrder = (props: Props) => {
    return (
        <article className="mt-5">
            <div className="flex justify-between items-center">
                <h2 className="text-zinc-800 text-2xl font-bold font-['Poppins']">
                    Recent Order
                </h2>
                <p className="text-sm text-primary font-['Poppins']">View All</p>
            </div>
            <div className="flex gap-x-3 justify-around mt-2">
                <Card className="w-52 border-none items-center justify-center py-2">
                    <CardContent className="flex justify-center">
                        <Image src={Pepproni} alt="Bakery" />
                    </CardContent>
                    <CardFooter className="text-center text-lg font-normal font-['Poppins'] flex flex-col items-center space-y-3">
                        <p>Bakery</p>
                        <span className="text-center"><span className="text-yellow-500 text-2xl font-bold font-['Poppins']">$</span><span className="text-zinc-800 text-2xl font-bold font-['Poppins']">5.59</span></span>
                        <p className="text-zinc-400 ">4.97 km</p>
                    </CardFooter>
                </Card>
                <Card className="w-52 border-none items-center justify-center py-2">
                    <CardContent className="flex justify-center">
                        <Image src={Pepproni} alt="Bakery" />
                    </CardContent>
                    <CardFooter className="text-center text-lg font-normal font-['Poppins'] flex flex-col items-center space-y-3">
                        <p>Bakery</p>
                        <span className="text-center"><span className="text-yellow-500 text-2xl font-bold font-['Poppins']">$</span><span className="text-zinc-800 text-2xl font-bold font-['Poppins']">5.59</span></span>
                        <p className="text-zinc-400 ">4.97 km</p>
                    </CardFooter>
                </Card>
                <Card className="w-52 border-none items-center justify-center py-2">
                    <CardContent className="flex justify-center">
                        <Image src={Pepproni} alt="Bakery" />
                    </CardContent>
                    <CardFooter className="text-center text-lg font-normal font-['Poppins'] flex flex-col items-center space-y-3">
                        <p>Bakery</p>
                        <span className="text-center"><span className="text-yellow-500 text-2xl font-bold font-['Poppins']">$</span><span className="text-zinc-800 text-2xl font-bold font-['Poppins']">5.59</span></span>
                        <p className="text-zinc-400 ">4.97 km</p>
                    </CardFooter>
                </Card>
            </div>
        </article>
    )
}

export default RecentOrder