import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { Input } from '@/src/common/components/ui/input'
import { Card, CardContent, CardFooter, CardHeader } from '@/src/common/components/ui/card'
import Image from 'next/image'
import { Button } from '@/src/common/components/ui/button'
import { AiOutlinePlus } from 'react-icons/ai'
import { Badge } from '@/src/common/components/ui/badge'
import Star from '@/public/icon/Star.svg'
import Pepproni from '@/public/images/Pizza/pepproni-pizza.png'
type Props = {}

const OrderFood = (props: Props) => {
    return (
        <section className='mx-5 my-4'>
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
            <div className='grid grid-cols-2 gap-x-3 gap-y-3 justify-around mt-4 '>
                <Card className="border-none py-2">
                    <CardHeader className="text-zinc-800 text-2xl font-bold font-['Poppins'] text-center flex flex-col gap-y-3 divide-y-[1px]">
                        <div className='flex flex-col gap-y-2'>
                            <p>Order #1</p>
                            <p className='text-sm text-zinc-400'>Nov 11, 2021, 18:36 PM</p>
                        </div>
                        <div className='flex flex-col gap-y-3 pt-4 '>
                            <div className='flex justify-between items-center'>
                                <p className='text-sm text-zinc-400'>Delivery Time</p>
                                <span className='text-sm font-semibold'>10 Min</span>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-sm text-zinc-400'>Distance</p>
                                <span className='text-sm font-semibold'>2.5 KM</span>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center ">
                        <h1 className="text-lg font-normal font-['Poppins']">Order Menu</h1>
                        <div className=' divide-y space-y-5 mt-2'>
                            <div className='flex items-center justify-between gap-x-3'>
                                <div className='flex gap-x-2'>
                                    <Image src={Pepproni} alt="Pepproni Pizza" className='w-14 h-14' />
                                    <div>
                                        <p className="text-zinc-800 font-semibold font-['Poppins']">Pepperoni Pizza</p>
                                        <p className="text-zinc-400 text-sm font-normal font-['Poppins']">1x Regular</p>
                                    </div>
                                </div>
                                <p><span className="text-zinc-800 text-base font-semibold font-['Poppins']">+</span><span className="text-yellow-500 text-base font-semibold font-['Poppins']">$</span><span className="text-zinc-800 text-base font-semibold font-['Poppins']">5.59</span></p>
                            </div>
                            <div className='pt-4 flex flex-col gap-y-3'>
                                <div className='flex justify-between items-center'>
                                    <p className="text-zinc-800 text-lg font-medium font-['Poppins']">Total</p>
                                    <p><span className="text-yellow-500 text-2xl font-medium font-['Poppins']">$</span><span className="text-zinc-800 text-2xl font-medium font-['Poppins']">202.00</span></p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="text-zinc-400 text-base font-normal font-['Poppins'] px-4" >
                        <Button className='w-full bg-lime-50 border border-lime-300 text-lime-500 hover:bg-lime-50 hover:text-lime-500' variant={'outline'}>Completed</Button>
                    </CardFooter>
                </Card>

                <Card className="border-none py-2">
                    <CardHeader className="text-zinc-800 text-2xl font-bold font-['Poppins'] text-center flex flex-col gap-y-3 divide-y-[1px]">
                        <div className='flex flex-col gap-y-2'>
                            <p>Order #1</p>
                            <p className='text-sm text-zinc-400'>Nov 11, 2021, 18:36 PM</p>
                        </div>
                        <div className='flex flex-col gap-y-3 pt-4 '>
                            <div className='flex justify-between items-center'>
                                <p className='text-sm text-zinc-400'>Delivery Time</p>
                                <span className='text-sm font-semibold'>10 Min</span>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-sm text-zinc-400'>Distance</p>
                                <span className='text-sm font-semibold'>2.5 KM</span>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center ">
                        <h1 className="text-lg font-normal font-['Poppins']">Order Menu</h1>
                        <div className=' divide-y space-y-5 mt-2'>
                            <div className='flex items-center justify-between gap-x-3'>
                                <div className='flex gap-x-2'>
                                    <Image src={Pepproni} alt="Pepproni Pizza" className='w-14 h-14' />
                                    <div>
                                        <p className="text-zinc-800 font-semibold font-['Poppins']">Pepperoni Pizza</p>
                                        <p className="text-zinc-400 text-sm font-normal font-['Poppins']">1x Regular</p>
                                    </div>
                                </div>
                                <p><span className="text-zinc-800 text-base font-semibold font-['Poppins']">+</span><span className="text-yellow-500 text-base font-semibold font-['Poppins']">$</span><span className="text-zinc-800 text-base font-semibold font-['Poppins']">5.59</span></p>
                            </div>
                            <div className='pt-4 flex flex-col gap-y-3'>
                                <div className='flex justify-between items-center'>
                                    <p className="text-zinc-800 text-lg font-medium font-['Poppins']">Total</p>
                                    <p><span className="text-yellow-500 text-2xl font-medium font-['Poppins']">$</span><span className="text-zinc-800 text-2xl font-medium font-['Poppins']">202.00</span></p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="text-base font-normal font-['Poppins'] px-4" >
                        <Button className="w-full bg-orange-50 border border-orange-300 text-orange-400 hover:bg-orange-50 hover:text-orange-400" variant={'outline'}>Develiring To You</Button>
                    </CardFooter>
                </Card>
                <Card className="border-none py-2">
                    <CardHeader className="text-zinc-800 text-2xl font-bold font-['Poppins'] text-center flex flex-col gap-y-3 divide-y-[1px]">
                        <div className='flex flex-col gap-y-2'>
                            <p>Order #1</p>
                            <p className='text-sm text-zinc-400'>Nov 11, 2021, 18:36 PM</p>
                        </div>
                        <div className='flex flex-col gap-y-3 pt-4 '>
                            <div className='flex justify-between items-center'>
                                <p className='text-sm text-zinc-400'>Delivery Time</p>
                                <span className='text-sm font-semibold'>10 Min</span>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-sm text-zinc-400'>Distance</p>
                                <span className='text-sm font-semibold'>2.5 KM</span>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center ">
                        <h1 className="text-lg font-normal font-['Poppins']">Order Menu</h1>
                        <div className=' divide-y space-y-5 mt-2'>
                            <div className='flex items-center justify-between gap-x-3'>
                                <div className='flex gap-x-2'>
                                    <Image src={Pepproni} alt="Pepproni Pizza" className='w-14 h-14' />
                                    <div>
                                        <p className="text-zinc-800 font-semibold font-['Poppins']">Pepperoni Pizza</p>
                                        <p className="text-zinc-400 text-sm font-normal font-['Poppins']">1x Regular</p>
                                    </div>
                                </div>
                                <p><span className="text-zinc-800 text-base font-semibold font-['Poppins']">+</span><span className="text-yellow-500 text-base font-semibold font-['Poppins']">$</span><span className="text-zinc-800 text-base font-semibold font-['Poppins']">5.59</span></p>
                            </div>
                            <div className='pt-4 flex flex-col gap-y-3'>
                                <div className='flex justify-between items-center'>
                                    <p className="text-zinc-800 text-lg font-medium font-['Poppins']">Total</p>
                                    <p><span className="text-yellow-500 text-2xl font-medium font-['Poppins']">$</span><span className="text-zinc-800 text-2xl font-medium font-['Poppins']">202.00</span></p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="text-zinc-400 text-base font-normal font-['Poppins'] px-4" >
                        <Button className='w-full bg-blue-50 border border-blue-300 text-blue-400 hover:bg-blue-50 hover:text-blue-400' variant={'outline'}>Order Being Prepared</Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}

export default OrderFood