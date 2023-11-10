import React from 'react'
import { IoMdSettings, IoMdNotificationsOutline } from 'react-icons/io'
import { Avatar, AvatarImage } from '../../components/ui/avatar'
import { Card, CardContent } from '../../components/ui/card'
import { BiMap } from 'react-icons/bi'
import { BiChevronRight } from 'react-icons/bi'
import Income from "@/public/icon/Income.svg"
import Profit from "@/public/icon/Profit.svg"
import Image from 'next/image'
import { Button } from '../../components/ui/button'
import Pepproni from '@/public/images/Pizza/pepproni-pizza.png'
import Coupon from '@/public/icon/Coupon.svg'

const SidebarRight = () => {
    return (
        <aside className='w-[550px] py-10 h-full'>
            <article className='px-4'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-x-4'>
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
                        <CardContent className='flex p-5 gap-x-5 relative z-10'>
                            <div className=' p-4 bg-white rounded-2xl flex-col justify-start items-start inline-flex gap-y-2'>
                                <p className="text-zinc-800 text-sm font-normal font-['Poppins']">Balance</p>
                                <h1 className="text-zinc-800 text-xl font-bold font-['Poppins']">$12.000</h1>
                            </div>
                            <div className='flex gap-x-6 items-center'>
                                <div className='text-center flex flex-col gap-y-3 items-center justify-center'>
                                    <div className='bg-white p-3 rounded-xl w-12'>
                                        <Image src={Income} alt="Profit" />
                                    </div>
                                    <p className="text-sm whitespace-nowrap text-white font-['Poppins']">Top Up</p>
                                </div>
                                <div className='text-center flex flex-col gap-y-3 items-center justify-center'>
                                    <div className='bg-white p-3 rounded-xl w-12'>
                                        <Image src={Profit} alt="Profit" />
                                    </div>
                                    <p className="text-sm whitespace-nowrap text-white font-['Poppins']">Transfer</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </article>
                {/* Address */}
                <article className='mt-8'>
                    <h1 className="text-zinc-400 text-lg font-normal font-['Poppins']">Address</h1>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-x-2 items-center'>
                            <BiMap className="text-primary" size={24} />
                            <p className="text-zinc-800 text-lg font-bold font-['Poppins']">Elm Street, 23</p>
                        </div>
                        <Button className='bg-white text-primary border border-primary px-4 hover:bg-white'>Change</Button>
                    </div>
                    <p className="text-zinc-400 text-sm font-normal font-['Poppins'] mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, reiciendis?
                    </p>
                    <div className='mt-4 flex gap-x-5'>
                        <Button variant={'outline'}>Add Details</Button>
                        <Button variant={'outline'}>Add note</Button>
                    </div>
                </article>
                {/* Order Menu */}
                <article className='mt-8'>
                    <h1 className="text-lg font-normal font-['Poppins']">Order Menu</h1>
                    <div className='divide-y space-y-5'>
                        <div className='flex flex-col '>
                            <div className='flex justify-around'>
                                <Image src={Pepproni} alt="Pepproni Pizza" className='w-14 h-14' />
                                <div>
                                    <p className="text-zinc-800 font-semibold font-['Poppins']">Pepperoni Pizza</p>
                                    <p className="text-zinc-400 text-sm font-normal font-['Poppins']">1x Regular</p>
                                </div>
                                <p><span className="text-zinc-800 text-lg font-semibold font-['Poppins']">+</span><span className="text-yellow-500 text-lg font-semibold font-['Poppins']">$</span><span className="text-zinc-800 text-lg font-semibold font-['Poppins']">5.59</span></p>
                            </div>
                        </div>
                        <div className='pt-4 flex flex-col gap-y-3'>
                            <div className='flex justify-between items-center'>
                                <p className="text-zinc-400 text-sm font-medium font-['Poppins']">Service</p>
                                <p><span className="text-zinc-800 text-lg font-medium font-['Poppins']">+</span><span className="text-yellow-500 text-lg font-medium font-['Poppins']">$</span><span className="text-zinc-800 text-lg font-medium font-['Poppins']">1.00</span></p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className="text-zinc-800 text-lg font-medium font-['Poppins']">Total</p>
                                <p><span className="text-yellow-500 text-2xl font-medium font-['Poppins']">$</span><span className="text-zinc-800 text-2xl font-medium font-['Poppins']">202.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-4'>
                        <Button className='backdrop-blur-md bg-zinc-100 text-black border-[1.5px] border-primary w-full hover:bg-zinc-100 py-4'>
                            <Image src={Coupon} alt="Coupon" className='w-8 h-8 rounded mr-3 bg-primary' />
                            Have a Coupon Code
                            <BiChevronRight className='ml-3' size={20} />
                        </Button>
                        <Button className='bg-primary text-white w-full mt-4 py-4'>
                            Checkout
                        </Button>
                    </div>
                </article>
            </article>
        </aside>
    )
}

export default SidebarRight

