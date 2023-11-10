import SidebarLeft from '@/src/common/layouts/sidebarLeft'
import SidebarRight from '@/src/common/layouts/sidebarRight'
import React from 'react'

const layout = ({ children }: {
    children: React.ReactNode

}) => {
    return (
        <section className='flex justify-between mx-auto max-w-7xl'>
            <SidebarLeft />
            <main className='bg-[#F5F5F5] w-full'>{children}</main>
            <SidebarRight />
        </section>
    )
}

export default layout