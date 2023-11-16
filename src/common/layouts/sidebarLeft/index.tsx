'use client'
import React from 'react'
import { MENU } from '@/src/common/constants/Menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../../components/ui/button'

const SidebarLeft = () => {
    const pathname = usePathname()

    return (
        <aside className='w-[250px] h-full py-10 px-6'>
            <article className=' flex flex-col'>
                <h1 className='text-3xl font-bold text-center'>GoMeal<span className='text-primary'>.</span></h1>
                <div className='pt-10'>
                    {MENU.map((item, index) => (
                        <Link key={index} href={item.path} className={`${pathname === item.path ? `bg-primary rounded-lg text-white` : ``} flex items-center my-5 gap-x-4 py-2 px-4 whitespace-nowrap`}>
                            <i className={`w-8 ${pathname === item.path ? 'fill-white' : ''}`}>{item.icon}</i>
                            <p>{item.name}</p>
                        </Link>
                    ))}
                </div>
                <div className='bg-primary p-5 rounded-lg'>
                    <h1 className='text-white font-semibold pb-4'>Upgrade your Account to get Free Voucher</h1>
                    <Button className='bg-white text-black'>Upgrade</Button>
                </div>
            </article>
        </aside>
    )
}

export default SidebarLeft